import { Program } from "@/types";

export const programs: Program[] = [
  {
    id: "education",
    slug: "education",
    title: "Unlocking Potential",
    shortTitle: "Education",
    description:
      "Quality education and life skills for children and youth from marginalized communities, ensuring no dream goes unrealized due to circumstance.",
    longDescription: `Our education program focuses on providing holistic, quality education to children from the most marginalized communities across India. We operate learning centers, after-school programs, and scholarship initiatives that address not just academic needs, but the social and emotional development of every child.

From foundational literacy and numeracy to digital skills and career guidance, our programs are designed to unlock the full potential of every learner. We work closely with families, local schools, and government institutions to create an ecosystem of support.`,
    icon: "BookOpen",
    image: "/images/programs/education.jpg",
    color: "#E8820C",
    stats: [
      { value: 25000, suffix: "+", label: "Children Enrolled", icon: "👧" },
      { value: 150, suffix: "+", label: "Learning Centers", icon: "🏫" },
      { value: 95, suffix: "%", label: "Retention Rate", icon: "📊" },
      { value: 12, suffix: "", label: "States Covered", icon: "🗺️" },
    ],
  },
  {
    id: "healthcare",
    slug: "healthcare",
    title: "Healing With Care",
    shortTitle: "Healthcare",
    description:
      "Accessible healthcare services, preventive wellness programs, and mental health support to ensure every community member can thrive.",
    longDescription: `Health is the foundation upon which all other development stands. Our healthcare program provides accessible, affordable, and quality healthcare services to communities that have been historically underserved.

Through mobile health clinics, community health worker networks, preventive care workshops, maternal and child health programs, and mental health initiatives, we are building a healthier India from the ground up.`,
    icon: "Heart",
    image: "/images/programs/healthcare.jpg",
    color: "#0A6E6E",
    stats: [
      { value: 50000, suffix: "+", label: "Health Check-ups", icon: "🏥" },
      { value: 80, suffix: "+", label: "Health Camps", icon: "⛺" },
      { value: 300, suffix: "+", label: "Community Health Workers", icon: "👩‍⚕️" },
      { value: 8, suffix: "", label: "Mobile Clinics", icon: "🚑" },
    ],
  },
  {
    id: "livelihood",
    slug: "livelihood",
    title: "Pathways to Independence",
    shortTitle: "Livelihood",
    description:
      "Vocational training, entrepreneurship support, and market linkages that help families build sustainable incomes and break the cycle of poverty.",
    longDescription: `True empowerment comes from economic independence. Our livelihood program equips individuals — especially women — with the skills, knowledge, and connections they need to build sustainable livelihoods.

From tailoring and beauty services to digital marketing and financial literacy, our vocational training programs are designed around local market demands. We also support micro-entrepreneurs with seed funding, mentorship, and market linkages.`,
    icon: "Briefcase",
    image: "/images/programs/livelihood.jpg",
    color: "#D4A843",
    stats: [
      { value: 5000, suffix: "+", label: "Women Trained", icon: "💪" },
      { value: 800, suffix: "+", label: "Micro-Enterprises", icon: "🏪" },
      { value: 85, suffix: "%", label: "Income Increase", icon: "📈" },
      { value: 2000, suffix: "+", label: "Jobs Created", icon: "💼" },
    ],
  },
  {
    id: "environment",
    slug: "environment",
    title: "Nurturing Our Planet",
    shortTitle: "Environment",
    description:
      "Community-led environmental conservation, clean energy adoption, and climate resilience building for a sustainable tomorrow.",
    longDescription: `Environmental sustainability is not a luxury — it's a necessity, especially for the communities most vulnerable to climate change. Our environment program works with communities to protect natural resources, adopt clean energy solutions, and build resilience against environmental challenges.

From tree plantation drives and watershed management to solar energy installations and waste management systems, we combine traditional ecological knowledge with modern sustainable practices.`,
    icon: "Leaf",
    image: "/images/programs/environment.jpg",
    color: "#7BA587",
    stats: [
      { value: 100000, suffix: "+", label: "Trees Planted", icon: "🌳" },
      { value: 50, suffix: "+", label: "Villages Solar-Powered", icon: "☀️" },
      { value: 200, suffix: "+", label: "Water Harvesting Systems", icon: "💧" },
      { value: 30, suffix: "+", label: "Eco-Clubs", icon: "♻️" },
    ],
  },
];
