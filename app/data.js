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
          "Reale has a founder who can bring people to a launch. Sephora already gives shoppers reasons to visit. But celebrity attention alone doesn't earn a place on the shelf. The partnership has to prove its value to both businesses.",
          "The business question: can guided trial create customers who come back?",
        ],
      },
      goals: {
        heading: "Goals",
        list: [
          "For Reale: become a routine shoppers choose even when the founder is off-screen, with demand beyond her following and a lower-risk first purchase.",
          "For Sephora: turn creator attention into a useful skincare experience and grow category sales, not just shift purchases from existing brands.",
          "For both: learn from aggregate trial, repeat and returns data before committing to a national rollout.",
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
      // A perceptual map: "position" is where each brand sits on the axis, 0–100.
      whiteSpace: {
        eyebrow: "Category opportunity",
        heading: "The white space",
        intro:
          "Reale does not need to out-clinical the clinical brands or out-lifestyle the lifestyle brands. The opportunity sits between the two.",
        axis: { left: "Clinical / functional", right: "Lifestyle / cultural" },
        brands: [
          { name: "The Ordinary", position: 8 },
          { name: "Paula's Choice", position: 29 },
          { name: "Reale Actives", position: 50, highlight: true, annotation: "active skincare made easier to live with" },
          { name: "Rhode", position: 71 },
          { name: "Summer Fridays", position: 92 },
        ],
        opportunity: { label: "Opportunity", lines: ["Clinical credibility", "×", "lifestyle ease"] },
        note: "Illustrative positioning based on how each brand presents itself, not shopper research.",
      },
      audienceInsight: {
        heading: "Audience & insight",
        body: [
          "Working audience: adults 18–29 who wear makeup, shop prestige beauty, and feel unsure about adding actives to their routine.",
        ],
        quote: "I can keep plans in my calendar. I need skincare I can actually keep up with.",
        note: "A research hypothesis, not a shopper quote. The plan validates it with 12 interviews and a 100-person concept test before choosing the final message.",
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
          "The memorable behavior is the Reale Routine Check: a short advisor conversation that ends with one starting point, a take-home routine card and a trial invitation.",
        ],
      },
      howItWorks: {
        heading: "How it works",
        list: [
          "Choose your goal: makeup removal, hydration or ingredient education.",
          "Keep what works: shoppers keep products they already use and start with one relevant step.",
          "Save your card: a routine card records the product's role and directions.",
          "Try it: the Reale Starting Point, a proposed free trial sleeve, gives seven days to get to know the routine, with no promise of acne results.",
          "Follow up: opt-in messages at day 0, 3, 7, 30 and 60/90 focus on fit and usage, not a hard sell.",
        ],
      },
      launchPlan: {
        heading: "Launch plan",
        list: [
          "Tease (T–14 to T–1): the founder shows a routine card beside a Sephora bag. \u201cMy routine has a new address.\u201d",
          "Reveal (launch day): a proposed Sephora Drop Shop LIVE with founder context, dermatologist product education and an advisor-led Routine Check.",
          "Shop (after the reveal): viewers are directed to the Starting Point trial and the in-store experience.",
          "Beyond the founder: 12 adult creators across six life contexts and 6 Beauty Advisors deliver repeatable, one-product-at-a-time education.",
        ],
      },
      // One template, repeated: a life moment, the need it creates, one starting point.
      campaignSystem: {
        eyebrow: "Campaign system",
        heading: "One platform. Different lives.",
        intro:
          "The idea isn't one ad. It's a repeatable creative framework: a real-life moment, the need it creates, and one Reale starting point.",
        formula: ["Life moment", "Need", "Starting point"],
        tileLabel: "Reale Actives × Sephora",
        signoff: "Your life. Your Reale routine.",
        situations: [
          { headline: ["Full glam.", "Early alarm."], need: "Remove makeup", startingPoint: "Pore Power" },
          { headline: ["Red-eye.", "8AM meeting."], need: "Support hydration", startingPoint: "Dew More" },
          { headline: ["Long day.", "Short routine."], need: "Keep it simple", startingPoint: "One starting point" },
          { headline: ["New active.", "Sensitive skin."], need: "Explore an active", startingPoint: "Advisor guidance" },
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
        conclusion:
          "The partnership works only if the launch creates value after the initial attention disappears.",
      },
      pilotMeasurement: {
        heading: "Pilot & measurement",
        body: [
          "Rather than a national rollout, the plan proposes a pilot: 6 weeks of preparation, 12 weeks of launch in 8 activation stores alongside 8 matched standard-launch stores, then a 90-day repeat readout.",
        ],
        listHeading: "What would prove the strategy worked?",
        list: [
          "Did Reale reach new buyers? New-to-Reale purchasers and source recall.",
          "Did trial help? 30-day full-size buyers per qualified trial.",
          "Did Sephora grow the category? Category sales change vs. matched stores.",
          "Did shoppers come back? 90-day repeat rate among first-time buyers.",
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
                description: "Feed art direction for the makeup-removal moment.",
                image: "/projects/reale-sephora/creator-social.jpg",
              },
              {
                title: "Red-eye. 8AM meeting.",
                description: "Life moment: support hydration with Dew More.",
                image: "",
              },
              {
                title: "Long day. Short routine.",
                description: "Life moment: keep it simple with one starting point.",
                image: "",
              },
              {
                title: "Creator carousel",
                description: "Adult creators across six life contexts, one product at a time.",
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
