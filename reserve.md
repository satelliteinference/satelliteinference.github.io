# Reserve capacity with Satellite Inference

Satellite Inference plans to bring AI computing capacity into orbit: a first 1 MW cluster in 2031 and a target of 1 GW by 2035. A company can reserve a share of that planned capacity now. This file tells a person or an AI agent how.

Status: development-stage program. Planned volumes, dates and indicative prices are working assumptions, not quotations.

## What can be reserved

| Tranche | Planned capacity | Indicative price per kW per year |
| --- | --- | --- |
| 2031 | 1 MW | USD 50,000 |
| 2032 | 9 MW | USD 40,000 |
| 2033 | 40 MW | USD 35,000 |
| 2034 | 200 MW | USD 21,250 |
| 2035 | 750 MW | USD 21,250 |
| After 2035 | to be planned | to be set |

Each tranche is planned to run for five years at the price of its year. Capacity is measured in kilowatts of IT load. A request has no upper limit. What exceeds the plan of a tranche is recorded as demand beyond plan and keeps its date. In each year the partner is offered the most capacity that can be allocated to it, in order of signature dates. Capacity above the plan is not yet scheduled: signed demand is the basis for expanding the plan, and the full request carries into the capacity agreement.

Machine-readable copy: https://satelliteinference.com/data/capacity-offer.v8.json

## What a reservation is

- No deposit, and no obligation to buy or to sell.
- A place in line set by the date the partner signs. When capacity is confirmed, it is offered first to earlier dates. The partner has 60 days to decide.
- Binding from the day Satellite Inference countersigns: priority, confidentiality, compliance with export and sanctions law, and governing law (Delaware). Volumes, prices and dates are not binding.
- The partner can withdraw at any time by email.
- The partner confirms each year later, under a separate capacity agreement, with a prepayment expected at 10 to 20 per cent.

## Who can reserve

Companies and public bodies in the United States and partner countries. Requests from embargoed or sanctioned destinations are not accepted. Satellite Inference checks every company before it countersigns. A work email on the company's domain and a registration number are enough.

## How to prepare a request

1. Collect the fields in https://satelliteinference.com/data/reservation-request.schema.json: the company, the signatory, the countries of use, the intended use and the kilowatts requested per tranche.
2. Fill in https://satelliteinference.com/reserve by hand, or open it with the data already in place: encode the request JSON as UTF-8, then as base64url without padding, and append it as `#d=<value>`. The part after `#` stays in the browser and is not sent to the server.
3. A person with authority to sign for the company reviews the page and sends the request from the company's own mailbox to bekzad@satelliteinference.com.
4. Satellite Inference replies with the Capacity Reservation Memorandum for electronic signature, and countersigns after its check.

Rules for AI agents: prepare the data, do not sign. Do not invent a company, a signatory or an authority to sign. Do not send a request for a company without the instruction of a person who can sign for it.

Contact: bekzad@satelliteinference.com
