/**
 * Central Business Configuration for Holistic Dental Care
 * Single source of truth for all verified clinic information in Kudasan, Gandhinagar.
 * 
 * NOTE: Strictly factual. No unverified doctor names, pricing, email addresses,
 * WhatsApp numbers, or clinical outcome statistics.
 */

export interface TreatmentService {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  surfaceStyle: 'white' | 'cream' | 'sage';
  iconName: string;
}

export interface BusinessConfig {
  clinicName: string;
  tagline: string;
  locationKicker: string;
  address: {
    building: string;
    road: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    formatted: string;
  };
  phone: {
    raw: string;
    display: string;
    telHref: string;
  };
  googleRating: {
    score: number;
    reviewCount: number;
    platform: string;
    badgeText: string;
    verifiedText: string;
    reviewsUrl: string;
  };
  hours: {
    primaryText: string;
    detailText: string;
    disclaimer: string;
  };
  maps: {
    directionsUrl: string;
    mapQuery: string;
    landmarkDescription: string;
  };
  services: TreatmentService[];
  approachPhases: Array<{
    number: string;
    phaseName: string;
    title: string;
    description: string;
    icon: string;
  }>;
  journeySteps: Array<{
    number: string;
    title: string;
    description: string;
    color: 'primary' | 'secondary';
  }>;
}

export const BUSINESS_CONFIG: BusinessConfig = {
  clinicName: "Holistic Dental Care",
  tagline: "Your Smile Deserves Thoughtful Care.",
  locationKicker: "Kudasan · Gandhinagar",
  
  address: {
    building: "VTC, Ground Floor, Vrundavan Trade Center, A-5",
    road: "Reliance Cross Road",
    area: "Kudasan",
    city: "Gandhinagar",
    state: "Gujarat",
    pincode: "382419",
    formatted: "VTC, Ground Floor, Vrundavan Trade Center, A-5, Reliance Cross Road, Kudasan, Gandhinagar, Gujarat 382419"
  },

  phone: {
    raw: "07433053737",
    display: "074330 53737",
    telHref: "tel:07433053737"
  },

  googleRating: {
    score: 5.0,
    reviewCount: 124,
    platform: "Google Reviews",
    badgeText: "5.0 ★",
    verifiedText: "124 Google reviews (Verified listing)",
    reviewsUrl: "https://maps.google.com/?q=Holistic+Dental+Care+Kudasan+Gandhinagar+Gujarat"
  },

  hours: {
    primaryText: "Monday opening at 10:00 AM",
    detailText: "Monday – Saturday: Consultations from 10:00 AM",
    disclaimer: "Schedule subject to weekly confirmation"
  },

  maps: {
    directionsUrl: "https://maps.google.com/?q=Vrundavan+Trade+Center+Kudasan+Gandhinagar+Gujarat+382419",
    mapQuery: "Vrundavan Trade Center, Kudasan, Gandhinagar, Gujarat",
    landmarkDescription: "Ground Floor A-5, Reliance Cross Road"
  },

  services: [
    {
      id: "teeth-whitening",
      name: "Teeth Whitening",
      shortDescription: "Discuss professional whitening options and their suitability for your teeth with in-office and take-home approaches.",
      fullDescription: "Explore gentle whitening options suited to your enamel condition. Learn how targeted clinical whitening compares with custom take-home trays to safely brighten your natural smile.",
      surfaceStyle: "white",
      iconName: "Sparkles"
    },
    {
      id: "dental-bonding",
      name: "Dental Bonding",
      shortDescription: "Explore bonding options for selected cosmetic and restorative concerns including chip repairs and subtle contours.",
      fullDescription: "Minimally invasive composite resin techniques designed to repair chipped edges, close minor gaps, and refine tooth contour while conserving natural tooth structure.",
      surfaceStyle: "cream",
      iconName: "Wand2"
    },
    {
      id: "dental-checkups",
      name: "Dental Check-ups",
      shortDescription: "Discuss your oral health and preventive care needs with comprehensive cleanings, periodontal screening, and soft tissue exams.",
      fullDescription: "Detailed baseline oral examinations, gentle scaling, gum health checks, and preventive guidance that help preserve natural dentition and detect issues early.",
      surfaceStyle: "sage",
      iconName: "ShieldCheck"
    },
    {
      id: "cosmetic-dentistry",
      name: "Cosmetic Dentistry",
      shortDescription: "Explore possible approaches to your smile concerns with a dental professional focused on natural proportion and harmony.",
      fullDescription: "Patient-centered aesthetic evaluations taking into account facial balance, tooth alignment, and shade harmony without invasive over-treatment.",
      surfaceStyle: "cream",
      iconName: "Smile"
    },
    {
      id: "dental-implants",
      name: "Dental Implants",
      shortDescription: "Understand tooth-replacement options, the anatomical assessment process, and biocompatible restorative integration.",
      fullDescription: "Detailed diagnostic review of bone volume, anatomical spacing, and durable tooth replacement strategies for chewing comfort and dental arch stability.",
      surfaceStyle: "white",
      iconName: "Cpu"
    },
    {
      id: "crowns-restorative",
      name: "Crowns and Restorative Care",
      shortDescription: "Learn about options for restoring damaged or weakened teeth with durable ceramic, zirconia, and tooth-colored restorations.",
      fullDescription: "Protective ceramic and zirconia crowns and fillings that rebuild broken or decayed teeth, restoring bite strength and natural appearance.",
      surfaceStyle: "sage",
      iconName: "Shield"
    }
  ],

  approachPhases: [
    {
      number: "Phase 01",
      phaseName: "Patient Dialogue",
      title: "Listen First",
      description: "Make space for questions, concerns, and individual preferences before examining or recommending any intervention.",
      icon: "Ear"
    },
    {
      number: "Phase 02",
      phaseName: "Clinical Transparency",
      title: "Explain Clearly",
      description: "Understand the purpose, benefits, and limitations of the available treatment options without complex clinical jargon.",
      icon: "Eye"
    },
    {
      number: "Phase 03",
      phaseName: "Collaborative Care",
      title: "Plan Thoughtfully",
      description: "Discuss an appropriate care plan based on your individual clinical needs, long-term oral stability, and lifestyle.",
      icon: "Compass"
    }
  ],

  journeySteps: [
    {
      number: "01",
      title: "Reach Out",
      description: "Request an appointment and share a convenient time through our simple consultation form or direct phone call.",
      color: "primary"
    },
    {
      number: "02",
      title: "Have a Conversation",
      description: "Discuss your concerns and ask questions about your dental care in a private, unhurried treatment room.",
      color: "secondary"
    },
    {
      number: "03",
      title: "Understand Your Options",
      description: "Review the recommendations and next steps with your dental professional before making any treatment decision.",
      color: "primary"
    }
  ]
};
