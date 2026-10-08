// Edit this file to update the content of your site.

export const site = {  
  name: "Paris Hoffman",
  role: "",
  email: "parishoffman1@gmail.com",
  // Put a photo of yourself in public/ (e.g. public/me.jpg) and set this to "/me.jpg"
  photo: "/me.jpg",
  // Optional: a full-body photo of you with the background removed (a transparent .png),
  // e.g. "/cutout.png". It stands in front of the folder on the home page.
  cutout: "",
  links: [
    { label: "GitHub", href: "https://github.com/parishoffman/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/paris-hoffman/" },
  ],
};

// Home page settings
export const home = {
  // slug of the project to feature on the home page (defaults to the first project)
  featured: "reale-sephora",
  // Handwritten notes on the home page
  greeting: "hi, since you're here...",
  tour: "let me show you around",
};

export const about = {
  bio: [
    "I’m a computer science graduate with experience spanning technology, big law, and creative strategy.", 
    "I’m drawn to work that sits at the intersection of product, people, and ideas; whether that means building something, simplifying a complex problem, shaping how a product is positioned, or figuring out what would make an experience better for the person on the other side of it.",
    "My background has taken me from software projects to complex legal work, and along the way I’ve realized that I’m most energized by roles that combine analytical thinking with creativity.", 
    "I’m especially interested in technology, product, marketing, strategy, and the spaces where those disciplines overlap.",
    "I created this site as a place to share the things I’ve built, ideas I’ve explored, and problems I’ve found interesting enough to dig into.",
  ],
  skills: ["JavaScript", "React", "Next.js", "HTML & CSS", "Node.js", "Git"],
};

export const projects = [
  {
    slug: "reale-sephora",
    title: "Reale Actives × Sephora",
    concept: true, // shows a "Concept project" label; set to false for real client work
    description:
      "A speculative retail partnership built around guided trial and repeat purchase, helping a founder-led skincare brand earn customers beyond its founder's audience.",
    tags: ["Brand Partnership", "Retail Strategy", "Creative Direction"],
    cover: "/projects/reale-sephora/hero-campaign.jpg", // wide image for the case study page
    thumbnail: "/projects/reale-sephora/creator-social.jpg", // tall image for portfolio cards (optional)
    link: "",
    repo: "",
    caseStudy: {
      subtitle: "Your life. Your Reale routine.",
      // Quick facts shown at the top of the page
      facts: [
        { label: "Type", value: "Independent speculative concept" },
        { label: "My role", value: "Research, strategy, creative direction, launch planning" },
        { label: "Date", value: "September 2026" },
        { label: "Deliverables", value: "Pitch deck, executive brief, launch playbook, concept visuals" },
      ],
      overview:
        "A proposed U.S. retail launch for Reale Actives at Sephora. It explores whether an advisor-guided starting point, focused trial and follow-up could help Reale build repeat customers beyond its founder's audience, while giving Sephora a measurable contribution to its skincare category.",
      // This project uses its own layout (app/projects/[slug]/RealeSephora.js), so each
      // section is named. Each needs a heading, plus paragraphs ("body"), bullet points
      // ("list"), a pull quote ("quote") and/or small print ("note").
      challenge: {
        heading: "The challenge",
        body: [
          "Reale Actives proved demand on day one. The direct-to-consumer launch reportedly crossed $1M in under five minutes, sold out within 10 hours, and still had a 57,000-person waitlist after early restocks.",
          "What it hasn't proved yet is durability. Founder-led beauty has a mixed record at retail, and Sephora has dropped celebrity lines before. A shelf at Sephora has to be earned by shoppers who come back after the launch moment fades.",
          "The business question: can guided trial turn breakout-prone shoppers into repeat Reale customers, in a way that grows Sephora's acne-care shelf instead of just shifting sales between brands?",
        ],
      },
      goals: {
        heading: "Goals",
        list: [
          "For Reale: become the routine breakout-prone shoppers keep using when the founder is off-screen, with a lower-risk first purchase and demand beyond her following.",
          "For Sephora: add a differentiated acne-care option for breakout-prone shoppers, teens included, with guided trial that grows the category and holds up on sales per door.",
          "For both: start small while supply catches up to demand, then decide on a national rollout using aggregate trial, repeat, returns and in-stock data.",
        ],
      },
      sephoraCriteria: {
        eyebrow: "Retail partnership research",
        heading: "What Sephora is looking for",
        intro:
          "Sephora describes its strongest brand relationships as long-term partnerships built around white space, differentiation and sustainable growth.",
        criteria: [
          {
            title: "White space",
            question: "What is missing?",
            description: "A clear need within Sephora's existing assortment that the brand can uniquely fill.",
          },
          {
            title: "Differentiation",
            question: "Why Reale?",
            description: "A distinct brand point of view that extends beyond founder awareness.",
          },
          {
            title: "Long-term growth",
            question: "Why will people return?",
            description: "A reason for shoppers to return after the initial launch moment.",
          },
          {
            title: "Partnership",
            question: "Why Sephora?",
            description: "A concept Sephora's merchants, advisors, media and retail ecosystem can help strengthen.",
          },
        ],
        conclusion: {
          label: "This became the brief",
          text: "How can Reale turn founder attention into repeatable skincare behavior that creates value for both Reale and Sephora?",
        },
        source: {
          label: "Source ↗ Carolyn Bojanowski, Sephora",
          href: "https://www.linkedin.com/pulse/how-sephora-our-brand-partners-work-together-carolyn-bojanowski-xhd9c/",
        },
      },
      // A two-axis positioning map. Zones fill the grid row by row:
      // top-left, top-right, bottom-left, bottom-right.
      whiteSpace: {
        eyebrow: "Category opportunity",
        heading: "The white space",
        body: [
          "Acne care at Sephora tends to feel clinical: ingredient-forward, medical packaging, a regimen to follow. Lifestyle skincare feels good to use, but rarely speaks to breakouts.",
          "Reale sits in the gap: acne-focused care that doesn't feel clinical. It has four steps, a dermatologist behind the formulas, and packaging designed to be left out on the counter.",
        ],
        map: {
          title: "Reale owns acne care that doesn't feel clinical",
          x: { low: "Clinical feel", high: "Lifestyle feel" },
          y: { low: "General", high: "Acne-focused" },
          zones: [
            { title: "Clinical acne care", text: "Effective, but feels like a regimen" },
            { title: "Reale Actives: the gap", text: "Acne-focused, fun to use, derm-backed", highlight: true },
            { title: "Ingredient-first basics", text: "Affordable actives, DIY routines" },
            { title: "Lifestyle skincare", text: "Feels good, rarely about breakouts" },
          ],
          // Only brands verified on Sephora's U.S. shelf. x and y run 0–100 from the bottom-left,
          // e.g. { name: "Brand", x: 20, y: 80 }
          brands: [],
        },
        note: "Illustrative positioning based on how each brand presents itself, not shopper research.",
      },
      audienceInsight: {
        heading: "Audience & insight",
        body: [
          "Primary: 18–29s with breakout-prone skin who shop prestige beauty. Secondary: teens 13–17 dealing with breakouts, often shopping with a parent.",
        ],
        quote: "I don't need a ten-step regimen. I need to know which one thing to start with — and that it won't wreck my skin.",
        note: "A research hypothesis, not a shopper quote. The plan tests it with 12 interviews and a 100-person concept test before the final message is chosen.",
        evidence: {
          heading: "Why guidance matters",
          intro: "In a published study of people with acne:",
          stats: [
            { value: "95%", label: "used social media for skin information" },
            { value: "97%", label: "would trust a dermatologist over an influencer when the two disagreed" },
          ],
          conclusion: "Founder attention gets shoppers in the door; expert guidance is what keeps them.",
          sources: [
            {
              label: "Study ↗ Bal et al., Cureus (2025): 100 acne patients at a dermatology clinic in Turkey",
              href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12068905/",
            },
            {
              label: "Via ↗ Campaign US, August 2026",
              href: "https://campaignlive.com/article/celebrity-owned-skincare-isnt-groundbreaking-heres-reale-actives-vying-space-shelf/1966500",
            },
          ],
        },
        ageNote: "Why teens get a guided start: acne often begins in the teen years. The plan welcomes teens with gentle starting points and parent-friendly guidance. See No. 08.",
      },
      // Full-bleed campaign moment: "headline" lines stack, "pillars" sit beneath.
      bigIdea: {
        heading: "The big idea",
        headline: ["Your life.", "Your Reale", "routine."],
        pillars: [
          { title: "Life", text: "creates the need" },
          { title: "Reale", text: "provides the starting point" },
          { title: "Sephora", text: "turns it into guidance + trial" },
        ],
        body: [
          "The Reale Routine Check is a short conversation built into Sephora's existing in-store skincare consultation, not a new service advisors have to learn from scratch. It ends with one starting point, a take-home routine card, and a trial invitation.",
          "The script and training are co-developed with Dr. Kiran Mian, Reale's director of clinical innovation, and delivered by Reale-funded educators alongside Sephora advisors.",
        ],
      },
      howItWorks: {
        heading: "How it works",
        steps: [
          {
            title: "Confirm fit.",
            text: "The educator asks the shopper's age range so the starting point fits, then asks about current prescriptions (e.g., tretinoin), sensitivity, and what they already use.",
          },
          {
            title: "Choose your starting point.",
            options: [
              { need: "Wear long-wear makeup", product: "Get Bare", detail: "makeup-melting cleansing balm" },
              { need: "Congested or breakout-prone", product: "Pore Power", detail: "LHA + BHA exfoliating gel cleanser" },
              { need: "Barrier feels tight or irritated", product: "Dew More", detail: "barrier-strengthening moisturizer" },
              { need: "Ready for a leave-on active, with guidance", product: "Go Deep", detail: "mandelic acid serum" },
            ],
          },
          {
            title: "Keep what works.",
            text: "Shoppers keep their current products and add one step.",
          },
          {
            title: "Save your card.",
            text: "The routine card records the product's role, how often to use it, and what to pause if irritation happens.",
          },
          {
            title: "Try it.",
            text: "The Reale Starting Point trial gives seven days with the chosen product plus Dew More. It makes no promise of acne results.",
          },
          {
            title: "Follow up.",
            text: "Opt-in Beauty Insider messages at day 3, 7, 30 and 60/90, sent by Sephora and focused on fit and usage, not a hard sell.",
          },
        ],
      },
      launchPlan: {
        heading: "Launch plan",
        timing: "A January pilot, built around the New Year \u201cskin reset\u201d moment and away from the busy Holiday floor.",
        steps: [
          {
            title: "Tease (T–14 to T–1).",
            text: "The founder shows a routine card next to a Sephora bag: \u201cMy routine has a new address.\u201d",
          },
          {
            title: "Reveal (launch day).",
            choices: [
              {
                label: "Option A",
                text: "A Sephora Drop Shop LIVE on TikTok Shop with the founder, Dr. Mian and a Sephora educator running a live Routine Check.",
              },
              {
                label: "Option B",
                text: "If Drop Shop isn't available: a founder and dermatologist LIVE on Reale's and Sephora's own channels.",
              },
            ],
          },
          {
            title: "Shop.",
            text: "After any TikTok Shop exclusive window ends, Reale goes live on Sephora.com and in the 8 activation stores, where the Routine Check happens.",
          },
          {
            title: "Beyond the founder.",
            text: "12 creators (all 18+), several sharing their teen-acne stories, across six life contexts and Reale-funded educators in the activation stores teach one product at a time.",
          },
        ],
        guardrails: {
          title: "Age-appropriate guardrails",
          list: [
            {
              title: "Need-based, not trend-based.",
              text: "Messaging speaks to breakouts and routines, never to \u201cglow\u201d trends or using actives just because others do.",
            },
            {
              title: "No one under 13 is targeted.",
              text: "Paid media and creator content are not aimed at children.",
            },
            {
              title: "Teens 13–17 get a guided start.",
              text: "The Routine Check begins with the gentlest step that fits. Go Deep is recommended only after the Routine Check, with Dr. Mian's age guidance on the routine card.",
            },
            {
              title: "Parents are welcome in the conversation.",
              text: "The routine card includes a short note for a parent or guardian, plus when to see a doctor.",
            },
            {
              title: "Creators are adults.",
              text: "Paid creators are 18+, and several share their own teen-acne experience. This avoids paying minors while still speaking to teens.",
            },
            {
              title: "Claims are reviewed",
              text: "for acids and acne-adjacent language before launch.",
            },
          ],
        },
      },
      // One template, repeated: a life moment, the need it creates, one starting point.
      campaignSystem: {
        eyebrow: "Campaign system",
        headline: ["One platform.", "Different lives."],
        intro:
          "The idea isn't one ad. It's a repeatable creative framework: a real-life moment, the need it creates, and one Reale starting point.",
        formula: ["Life moment", "Need", "Starting point"],
        tileLabel: "Reale Actives × Sephora",
        signoff: "Your life. Your Reale routine.",
        // A blank card after the situations: the framework itself, ready for the next moment.
        template: {
          label: "The template",
          count: "06 / \u221e",
          headline: ["Life", "moment."],
          need: "Need",
          startingPoint: "Starting point",
        },
        situations: [
          { headline: ["Full glam.", "Early alarm."], need: "Take it all off", startingPoint: "Get Bare" },
          { headline: ["Gym,", "then brunch."], need: "Clear out congestion", startingPoint: "Pore Power" },
          { headline: ["Red-eye.", "8AM meeting."], need: "Support a stressed barrier", startingPoint: "Dew More" },
          { headline: ["Ready for", "an active."], need: "Start one, with guidance", startingPoint: "Go Deep + Routine Check" },
          { headline: ["Long day.", "Short routine."], need: "Keep it simple", startingPoint: "One starting point" },
        ],
      },
      valueForBoth: {
        heading: "Why this works for both",
        columns: [
          {
            title: "For Reale",
            list: [
              "Builds demand beyond founder attention",
              "Lowers first-purchase friction",
              "Creates a reason to return",
              "Establishes a repeatable retail learning loop",
            ],
          },
          {
            title: "For Sephora",
            list: [
              "Introduces a differentiated skincare experience",
              "Increases guided trial",
              "Creates Beauty Advisor interaction",
              "Gives the retailer measurable category behavior",
            ],
          },
        ],
        responsibilities: {
          heading: "Proposed responsibilities",
          note: "Commercial terms would be set by the partners.",
          columns: ["Workstream", "Reale", "Sephora"],
          rows: [
            {
              workstream: "Routine Check script & training",
              reale: "Writes it with Dr. Mian; funds training",
              sephora: "Approves; fits it into existing consultations",
            },
            {
              workstream: "In-store staffing",
              reale: "Funds brand educators in the 8 activation doors",
              sephora: "Advisors refer shoppers; manage store schedules",
            },
            {
              workstream: "Trial sleeves",
              reale: "Produces and funds 5,000 units",
              sephora: "Distributes at the Routine Check",
            },
            {
              workstream: "Fixtures",
              reale: "Designs and funds",
              sephora: "Approves placement and visual standards",
            },
            {
              workstream: "Follow-up messages",
              reale: "Writes copy; funds the program",
              sephora: "Sends to opted-in Beauty Insiders (owns the data)",
            },
            {
              workstream: "Creators",
              reale: "Contracts and pays; enforces age-appropriate guardrails",
              sephora: "Approves Sephora mentions and links",
            },
            {
              workstream: "Inventory",
              reale: "Commits stock for 16 doors + Sephora.com",
              sephora: "Sets replenishment and in-stock targets",
            },
            {
              workstream: "Measurement",
              reale: "Defines the questions; shares DTC benchmarks",
              sephora: "Shares aggregate results from Beauty Insider and store data",
            },
          ],
        },
        conclusion:
          "The partnership works only if the launch creates value after the initial attention disappears.",
      },
      pilotMeasurement: {
        heading: "Pilot & measurement",
        body: [
          "Rather than a national rollout, the plan proposes a pilot: 6 weeks of preparation, 12 weeks of launch in 8 activation stores alongside 8 matched standard-launch stores, then a 90-day repeat readout.",
        ],
        proofHeading: "What would prove the strategy worked?",
        proofs: [
          { question: "Did Reale reach new buyers?", metric: "New-to-Reale purchasers and source recall" },
          { question: "Did trial help?", metric: "30-day full-size buyers per qualified trial" },
          { question: "Did Sephora grow the category?", metric: "Category sales change vs. matched stores" },
          { question: "Did shoppers come back?", metric: "90-day repeat rate among first-time buyers" },
        ],
      },
      // Grouped by channel. Each chapter's first item is shown large.
      // Put images in public/projects/<slug>/ and reference them like
      // "/projects/<slug>/image.jpg". Leave image as "" to show a "coming soon" slot.
      creativeExecutions: {
        heading: "Creative executions",
        intro: "One idea, carried through every place a shopper meets it: in store, on their phone, and in their feed.",
        chapters: [
          {
            title: "Retail experience",
            description: "Where the Routine Check happens: a short advisor conversation that ends with something to take home.",
            items: [
              {
                title: "The Reale Routine Check",
                description: "In-store fixture with three simple entry points and a printed routine card.",
                image: "/projects/reale-sephora/retail-experience.jpg",
              },
              {
                title: "Routine card",
                description: "A take-home card recording the product's role and directions.",
                image: "",
              },
              {
                title: "The Reale Starting Point",
                description: "Proposed trial sleeve pairing Pore Power and Dew More for a seven-day introduction.",
                image: "/projects/reale-sephora/starting-point-trial.jpg",
              },
            ],
          },
          {
            title: "Digital experience",
            description: "The same starting point, available before and after the store visit.",
            items: [
              {
                title: "Your starting point",
                description: "Recommended product screen: one starting point, with room for the shopper's current routine.",
                image: "/projects/reale-sephora/routine-check.jpg",
              },
              {
                title: "Starting point finder",
                description: "A short in-app check in the Sephora app that mirrors the in-store conversation.",
                image: "",
              },
              {
                title: "Beauty Insider follow-up",
                description: "Opt-in trial and follow-up messages focused on fit and usage, not a hard sell.",
                image: "",
              },
            ],
          },
          {
            title: "Campaign & social",
            description: "One template, repeated across life moments and carried by creators beyond the founder.",
            items: [
              {
                title: "Full glam. Early alarm.",
                description: "Feed art direction for the take-it-all-off moment, starting with Get Bare.",
                image: "/projects/reale-sephora/creator-social.jpg",
              },
              {
                title: "Gym, then brunch.",
                description: "Life moment: clear out congestion with Pore Power.",
                image: "",
              },
              {
                title: "Red-eye. 8AM meeting.",
                description: "Life moment: support a stressed barrier with Dew More.",
                image: "",
              },
              {
                title: "Ready for an active.",
                description: "Life moment: start one, with guidance, with Go Deep and the Routine Check.",
                image: "",
              },
              {
                title: "Long day. Short routine.",
                description: "Life moment: keep it simple with one starting point.",
                image: "",
              },
              {
                title: "Creator carousel",
                description: "Creators across six life contexts, one product at a time.",
                image: "",
              },
              {
                title: "Storefront & OOH",
                description: "The campaign line at the shelf and on the street, pointing to the Routine Check.",
                image: "",
              },
            ],
          },
        ],
      },
      // Projected or measured results. For a mock campaign, label these as targets.
      resultsHeading: "Proposed pilot at a glance",
      results: [
        { value: "16", label: "Stores (8 activation + 8 control)" },
        { value: "12 wks", label: "Launch & learn period" },
        { value: "5,000", label: "Qualified trials planned" },
        { value: "$150K", label: "Illustrative activation budget" },
      ],
      resultsNote:
        "Planning assumptions, not forecasts. No ROI or campaign results are claimed.",
      // Closing: what scales if the pilot works, then the ask.
      testNext: {
        label: "What I'd test next",
        heading: "If the pilot works",
        list: [
          "Expand the Routine Check to additional doors",
          "Optimize product entry points using trial data",
          "Scale the strongest life-context creative",
          "Introduce a Sephora-exclusive trial or mini set",
          "Test new audiences beyond the founder's existing following",
        ],
      },
      nextStep:
        "The proposed ask: a feasibility workshop with brand, retail education, operations and analytics, followed by small shopper tests.",
      downloads: [
        { label: "Portfolio deck (PDF)", href: "/projects/reale-sephora/reale-sephora-portfolio.pdf" },
        { label: "Executive brief (PDF)", href: "/projects/reale-sephora/reale-sephora-executive-brief.pdf" },
      ],
      disclosure: [
        "This is an independent, speculative portfolio concept. The partnership is hypothetical: neither Reale Actives nor Sephora commissioned or endorsed it, no outreach has been sent, and no campaign results or customer research findings are claimed.",
        "Audience insight, budgets, KPIs and commercial terms are assumptions. Product facts reflect brand-published sources checked September 30, 2026.",
        "Campaign images were created with AI assistance and illustrate imagined executions. They do not depict real stores, manufactured sample packaging or actual endorsers. Brand marks and product designs belong to their owners.",
      ],
    },
  },
  {
    title: "Project Two",
    description: "Another project. Mention the problem it solves and your role.",
    tags: ["React", "Node.js"],
    link: "https://example.com",
    repo: "https://github.com/parishoffman/project-two",
  },
  {
    title: "Project Three",
    description: "One more project to show off your range.",
    tags: ["JavaScript"],
    link: "",
    repo: "https://github.com/parishoffman/project-three",
  },
];
