const { default: Accordion } = require("@/components/accordion/accordion");

const faq = [
  {
    title: "What’s Kolanut?",
    description:
      "Kolanut Global Investment and Technologies Limited also known as Kolanut Africa is a digital platform that serves as a bridge between homeowners and insurance companies, with a primary focus on transparency and simplicity",
  },
  {
    title: "What type of home insurance policy is available?",
    description: (
      <div className="text-12 leading-[26.1px] font-semibold">
        <p className="mt-5">
          a. Fire And Special Perils Insurance — The Policy covers loss or
          damage caused by fire and other insured perils such as Lightning,
          Domestic Explosion, Aircraft and articles dropped from their Impact
          damage due to rail/road or animal, Riot strike, malicious and
          terrorism damage, Subsidence and Landslide (including rockslide),
          Natural disasters including storms, floods, Damage caused by sprinkler
          leakage, overflow, leakage of water tanks, pipes, etc.  The basic fire
          policy is limited in its scope, but the following  important perils
          known as special perils can be added for  adequate protection of your
          assets at a very reasonable cost:
        </p>
        <ul className="my-5">
          <li>▪ Storm, impact, or flood</li>
          <li>▪ Burst pipes, earthquakes, aircraft.</li>
          <li>▪ Riot, civil commotion</li>
          <li>▪ Machine damage</li>
          <li>▪ Explosion</li>
          <li>▪ Impact</li>
        </ul>
        <p className="mb-5">
          b. Burglary Housebreaking Policy — The policy is designed for business
          premises and covers a stock in trade, goods held in trust or on
          commission, fixtures & fittings, and utensils of trade.
        </p>
        <p className="mb-5">
          c. All Risks Insurance — This provides cover for the insured
          properties against “All Risks” of direct physical loss or damage from
          any accidental cause to the insured plant and equipment. 
        </p>
        <div>
          d. Construction All Risk (CAR) Insurance - This policy is designed to
          cover property damage and third-party injury or damage claims on
          construction projects. Let’s dive into the details:
          <br />
          1. What Does CAR Insurance Cover?
          <ul className="list-disc list-inside">
            <li>
              Property Damage: This includes improper construction of
              structures, damage during renovations,
            </li>
            <li>and harm to temporary work erected on-site.</li>
            <li>
              Third-Party Injury or Damage Claims: Subcontractors and other
              parties working at the construction
            </li>
            <li>site may suffer injuries or cause damage</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "How much does it cost me to insure my home?",
    description:
      "Depends on the cost of your property and the coverages you want to undertake",
  },
  {
    title: "How can I make a claim?",
    description:
      "Notify your provider(kolanut Africa), fill the claim form, provide the necessary docs - a police report, the repair estimate of the damaged building, statement of guards on duty, stocks record, pictures taken at the scene of the incidence, receipts of stolen items)",
  },
  {
    title: "What information do I need to provide for insurance?",
    description:
      "Worth of your property, coverages you want to undertake, period of cover, type of your property (Residential Buildings (Single and multi-units), Retail Spaces (Shops, Office Spaces) ,Industrial Buildings (Warehouses and Factories) and any other supporting docs",
  },
  {
    title: "How long does it take for my insurance confirmation",
    description:
      " Immediately premium is remitted and confirmed and all supporting document provided",
  },
];

const Faq = () => <Accordion accordionItems={faq} />;

export default Faq;
