# Orbit and thermal pointing: public illustration

The interactive panel at `/mission#attitude` compares ideal independently pointed solar arrays with arrays sharing the radiator plane. It is a public geometry model, not a spacecraft CAD export, selected orbit, deployment sequence, supplier specification, or flight-qualified controller. It does not publish private engineering files or modify the existing Rev C power/thermal screens.

## Frames and inputs

`lib/attitude-physics.ts` contains the pure geometry functions. `components/attitude-explorer.tsx` draws their output. Distances use the same WGS-84 equatorial Earth radius and gravitational parameter as `lib/orbital-physics.ts`.

The inertial orbital plane is XY, and +Z is its angular-momentum direction. The Sun is a fixed, unit, distant-source vector during one orbit. Beta is the angle above the orbital plane. Orbital phase f=0 is sunward in the plane; f=180 degrees is the opposite position. In radians:

```text
r_hat = (cos f, sin f, 0)          outward radial / zenith
v_hat = (-sin f, cos f, 0)        along-track
h_hat = (0, 0, 1)                orbit normal
s_hat = (cos beta, 0, sin beta)   toward the Sun
```

The local right-handed frame has x=v_hat, y=h_hat and z=r_hat. This convention matters: the beta component is along the orbit normal, not local zenith. The spacecraft is assumed to maintain that local frame. Beta, altitude and the radiator tilt are constant through each displayed orbit unless the user changes them. This is not a seasonal ephemeris or a sun-synchronous-orbit propagator.

The radiator's emitting-face normal for commanded tilt theta about local x is:

```text
n_rad = cos(theta) * r_hat - sin(theta) * h_hat
```

With independent solar pointing, `n_solar = s_hat`. That is an ideal orientation requiring sufficient pointing freedom, not a validated one-axis solar-array drive. With shared-plane comparison, `n_solar = n_rad`. Displayed panel-plane separation is `acos(abs(dot(n_solar, n_rad)))`, in the range0–90 degrees. Parallel planes may be physically separated; the term does not assert identical mounting locations.

## Eclipse and direct projection

The shadow uses the existing circular two-body, spherical-Earth, cylindrical-shadow assumptions. For spacecraft position r and Sun direction s, eclipse occurs when:

```text
dot(r, s) < 0
and sqrt(dot(r, r) - dot(r, s)^2) < Earth radius
```

A small numeric tolerance handles exact tangency. Solar disk size, penumbra, atmosphere, other spacecraft parts and panel self-shadowing are omitted. The sampled eclipse is tested against the analytic duration returned by the existing orbit model, including multiple altitudes and beta values.

Let L=0 in eclipse, otherwise L=1. The live readouts are dimensionless geometric factors:

```text
solar front projection = L * max(0, dot(n_solar, s))
radiator front projection = L * max(0, dot(n_rad, s))
radiator back projection = L * max(0, -dot(n_rad, s))
radiator either-face projection = front + back
```

The radiator readout includes whichever face is directly illuminated. It is not solar absorptivity, absorbed watts, emitted watts, net heat rejection or device temperature. The back-side coating can differ from the emitting face. No second-face cooling credit is inferred.

## Earth-visible emitting hemisphere

For Earth radius Re and altitude h, Earth's angular radius is `asin(Re/(Re+h))`. The Earth disk stays wholly behind a zenith-oriented emitting hemisphere while the absolute tilt is no greater than:

```text
90 degrees - asin(Re / (Re + h))
```

At 550 km the ideal limit is about 22.984 degrees. Crossing it indicates some Earth visibility, not a calculated Earth view factor or thermal load. Staying within it does not establish an unobstructed view of cold space: the bus, arrays and other hardware are not modelled as radiative occluders.

## Interpretation

At beta 90 degrees, a zenith-facing radiator is edge-on to the Sun throughout this ideal orbit. An independently pointed solar surface is Sun-normal. Their planes are perpendicular, solar projection is 1, and direct radiator projection is 0. If both surfaces instead share the radiator plane, the solar projection is also 0. This is why the two functions should not be represented by one fixed operational plane.

At other beta values, a fixed radiator need not stay edge-on. Tilting it may trade sunlight against Earth visibility. This tool does not optimize that trade or select a radiator drive, coating or shade. Dawn–dusk scenarios can have high beta but do not guarantee beta 90 or year-round zero eclipse in a real mission.

NASA's [Small Spacecraft Technology State of the Art: Thermal Control](https://www.nasa.gov/smallsat-institute/sst-soa/thermal-control/) explains why real thermal balance must include generated heat, direct solar absorption, reflected sunlight, planetary infrared, storage and radiation. That broader balance is outside this animation. See also the existing [public technical method](technical-method.md) for the separate power/thermal screen.

## Visual contract and interaction

Earth and orbit share a distance scale. The spacecraft-position marker is enlarged and remains visible through the globe; occluded path segments are shown faintly. Earth globe shading is decorative, not a computed day/night terminator. The close-up is a separate generic schematic, not to scale and not manufacturing geometry. Its surfaces use the same normal vectors as the calculations. Their illustrative roll around each normal is not an actuator or cable routing law.

Playback is opt-in, pauses when the document is hidden, and stops when controls or presets change. There is no autoplay. CSS transitions respect reduced-motion preferences; manual sliders remain available. The user can change beta, orbital phase, altitude and radiator tilt, or compare both pointing modes. No GPU framework or extra runtime dependency is introduced.

## Validation

`npm test` includes `tests/attitude-physics.test.mjs`. It checks frame handedness, beta placement, extreme and symmetric cases, analytic/sample eclipse agreement, Earth-clear bounds, independent/shared-plane controls, front/back projection separation, periodicity, singular plane-basis cases, invalid inputs and non-qualification flags. These tests do not verify spacecraft hardware. The full application also requires lint, TypeScript/static build, and browser interaction checks before release.
