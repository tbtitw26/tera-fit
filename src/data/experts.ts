import { Expert } from "@/types/expert";

export function getExpertBySlug(slug: string) {
    return experts.find((e) => e.slug === slug);
}

export const experts: Expert[] = [
    {
        id: "expert_marcus_l",
        slug: "ethan-w",
        avatar: "team1",
        username: "@ethan_w",
        rating: 4.9,
        subtitle: "Strength Training",
        experience: "15 Years",
        education: "NASM Certified",
        experienceLevel: "advanced",
        itemsCount: 320,
        bio: "Specialist in strength development and performance optimization.",
        categories: ["Advanced"],
        specialties: ["Strength", "Powerlifting"],
        profile: {
            headline: "Build strength with precision and discipline",
            about: [
                "Ethan helps athletes maximize strength safely.",
                "His programs are structured and data-driven."
            ],
            philosophy: "Strength is built through consistency.",
            achievements: [
                "Coached 50+ competitive athletes",
                "15 years professional experience"
            ],
        }
    },
    {
        id: "expert_sarah_j",
        slug: "olivia-h",
        avatar: "team10",
        username: "@olivia_h",
        rating: 4.8,
        subtitle: "Fat Loss Coaching",
        experience: "12 Years",
        education: "ACE, Precision Nutrition",
        experienceLevel: "advanced",
        itemsCount: 500,
        bio: "Helping clients lose weight sustainably and safely.",
        categories: ["Advanced"],
        specialties: ["Fat Loss", "Lifestyle Coaching"],
        profile: {
            headline: "Sustainable fat loss without extremes",
            about: [
                "Olivia combines training and nutrition.",
                "She focuses on long-term lifestyle changes."
            ],
            philosophy: "Consistency beats intensity.",
            achievements: [
                "500+ transformation clients",
                "Certified nutrition coach"
            ],
        }
    },
    {
        id: "expert_kenji_t",
        slug: "daniel-k",
        avatar: "team2",
        username: "@daniel_k",
        rating: 4.7,
        subtitle: "Mobility & Flexibility",
        experience: "10 Years",
        education: "FRC, Yoga Alliance",
        experienceLevel: "intermediate",
        itemsCount: 210,
        bio: "Improving movement quality and flexibility.",
        categories: ["Intermediate"],
        specialties: ["Mobility", "Injury Prevention"],
        profile: {
            headline: "Move better. Feel stronger.",
            about: [
                "Daniel focuses on joint health and mobility.",
                "His sessions prevent injuries and improve performance."
            ],
            philosophy: "Quality movement first.",
            achievements: [
                "Rehabilitation program specialist",
                "Certified mobility coach"
            ],
        }
    },
    {
        id: "expert_maria_g",
        slug: "isabella-m",
        avatar: "team11",
        username: "@isabella_m",
        rating: 4.6,
        subtitle: "Functional Training",
        experience: "8 Years",
        education: "CrossFit L2",
        experienceLevel: "intermediate",
        itemsCount: 180,
        bio: "Functional workouts for real-life strength.",
        categories: ["Intermediate"],
        specialties: ["Endurance", "Athletic Conditioning"],
        profile: {
            headline: "Train for life, not just aesthetics",
            about: [
                "Isabella integrates strength and endurance.",
                "Her workouts improve daily performance."
            ],
            philosophy: "Train smart, not just hard.",
            achievements: [
                "CrossFit competition coach",
                "Group training expert"
            ],
        }
    },
    {
        id: "expert_alex_r",
        slug: "noah-b",
        avatar: "team3",
        username: "@noah_b",
        rating: 4.5,
        subtitle: "Beginner Fitness",
        experience: "6 Years",
        education: "ISSA Certified",
        experienceLevel: "beginner",
        itemsCount: 150,
        bio: "Perfect for beginners starting from zero.",
        categories: ["Beginner"],
        specialties: ["Weight Loss", "Basic Strength"],
        profile: {
            headline: "Fitness made simple",
            about: [
                "Noah helps beginners start confidently.",
                "Programs are clear and easy to follow."
            ],
            philosophy: "Start small. Stay consistent.",
            achievements: [
                "Beginner transformation specialist",
                "Online coaching mentor"
            ],
        }
    },

    {
        id: "expert_luca_b",
        slug: "giovanni-m",
        avatar: "team4",
        username: "@giovanni_m",
        rating: 4.8,
        subtitle: "Italian Fitness",
        experience: "14 Years",
        education: "ALMA Fitness School",
        experienceLevel: "advanced",
        itemsCount: 160,
        bio: "Traditional techniques with modern fitness approach.",
        categories: ["Advanced"],
        specialties: ["Strength", "Functional Training"],
        profile: {
            headline: "Tradition meets modern fitness",
            about: [
                "Giovanni preserves classic methods and modernizes workouts.",
                "He emphasizes proper form and results."
            ],
            philosophy: "Consistency over gimmicks.",
            achievements: [
                "Worked with elite athletes",
                "Specialist in functional conditioning"
            ],
        }
    },

    {
        id: "expert_emily_c",
        slug: "chloe-l",
        avatar: "team12",
        username: "@chloe_l",
        rating: 4.7,
        subtitle: "Yoga & Mindfulness",
        experience: "11 Years",
        education: "Yoga Alliance, Mindfulness Coach",
        experienceLevel: "advanced",
        itemsCount: 220,
        bio: "Combines yoga, breathing, and mindfulness for holistic wellness.",
        categories: ["Advanced"],
        specialties: ["Yoga", "Mindfulness"],
        profile: {
            headline: "Balance your body and mind",
            about: [
                "Chloe guides clients to strength, flexibility, and mental clarity.",
                "Her holistic programs improve lifestyle and wellbeing."
            ],
            philosophy: "Wellness is harmony of mind and body.",
            achievements: [
                "Trained 300+ yoga practitioners",
                "Mindfulness workshops worldwide"
            ],
        }
    },

    {
        id: "expert_david_m",
        slug: "ryan-c",
        avatar: "team5",
        username: "@ryan_c",
        rating: 4.6,
        subtitle: "Cardio & Endurance",
        experience: "16 Years",
        education: "NASM Certified",
        experienceLevel: "advanced",
        itemsCount: 270,
        bio: "Expert in cardio conditioning and endurance sports.",
        categories: ["Advanced"],
        specialties: ["Endurance", "HIIT"],
        profile: {
            headline: "Push limits safely and effectively",
            about: [
                "Ryan designs endurance programs for athletes and hobbyists.",
                "Specializes in HIIT and long-term cardio planning."
            ],
            philosophy: "Consistency builds performance.",
            achievements: [
                "Coached 100+ marathon runners",
                "HIIT certification instructor"
            ],
        }
    },

    {
        id: "expert_anna_k",
        slug: "amelia-n",
        avatar: "team13",
        username: "@amelia_n",
        rating: 4.5,
        subtitle: "Nutrition & Weight Loss",
        experience: "9 Years",
        education: "Precision Nutrition, ISSA",
        experienceLevel: "intermediate",
        itemsCount: 190,
        bio: "Helps clients achieve sustainable weight loss through training and diet.",
        categories: ["Intermediate"],
        specialties: ["Nutrition", "Fat Loss"],
        profile: {
            headline: "Healthy habits, real results",
            about: [
                "Amelia creates personalized plans combining training and nutrition.",
                "Focuses on long-term sustainable results."
            ],
            philosophy: "Small habits, big changes.",
            achievements: [
                "Over 400 transformation clients",
                "Certified nutrition coach"
            ],
        }
    },

    {
        id: "expert_pierre_d",
        slug: "lucas-d",
        avatar: "team6",
        username: "@lucas_d",
        rating: 4.9,
        subtitle: "Strength & Conditioning",
        experience: "20 Years",
        education: "NSCA, NASM",
        experienceLevel: "advanced",
        itemsCount: 350,
        bio: "Elite strength and conditioning coach for athletes.",
        categories: ["Advanced"],
        specialties: ["Strength", "Athletic Conditioning"],
        profile: {
            headline: "Maximize power and performance",
            about: [
                "Lucas has trained professional athletes across multiple sports.",
                "Focuses on progressive overload and recovery."
            ],
            philosophy: "Strong foundations lead to peak performance.",
            achievements: [
                "Worked with Olympic athletes",
                "Published performance training guides"
            ],
        }
    },

    {
        id: "expert_sofia_n",
        slug: "elena-p",
        avatar: "team14",
        username: "@elena_p",
        rating: 4.6,
        subtitle: "Pilates & Mobility",
        experience: "8 Years",
        education: "Pilates Certification, FRC",
        experienceLevel: "intermediate",
        itemsCount: 170,
        bio: "Pilates instructor specializing in mobility and core strength.",
        categories: ["Intermediate"],
        specialties: ["Pilates", "Mobility"],
        profile: {
            headline: "Strengthen your core, improve movement",
            about: [
                "Elena creates programs improving posture, balance, and flexibility.",
                "Focuses on sustainable, injury-free training."
            ],
            philosophy: "Strong core, strong body.",
            achievements: [
                "Certified Pilates instructor",
                "Mobility workshops in Europe"
            ],
        }
    },

    {
        id: "expert_omar_h",
        slug: "karim-n",
        avatar: "team7",
        username: "@karim_n",
        rating: 4.7,
        subtitle: "CrossFit & Functional Training",
        experience: "13 Years",
        education: "CrossFit L3",
        experienceLevel: "advanced",
        itemsCount: 260,
        bio: "CrossFit coach focusing on functional strength and conditioning.",
        categories: ["Advanced"],
        specialties: ["Functional Training", "CrossFit"],
        profile: {
            headline: "Train hard, move well",
            about: [
                "Karim builds strength and endurance through functional movements.",
                "Coaches both beginners and elite athletes."
            ],
            philosophy: "Functional strength improves life quality.",
            achievements: [
                "CrossFit level 3 trainer",
                "Functional training workshops internationally"
            ],
        }
    },

    {
        id: "expert_julia_s",
        slug: "mia-s",
        avatar: "team15",
        username: "@mia_s",
        rating: 4.5,
        subtitle: "Home Fitness",
        experience: "7 Years",
        education: "ISSA Certified",
        experienceLevel: "beginner",
        itemsCount: 140,
        bio: "Provides beginner-friendly home workouts.",
        categories: ["Beginner"],
        specialties: ["Body Training", "Home Fitness"],
        profile: {
            headline: "Get fit at home with ease",
            about: [
                "Mia designs short, effective routines for home use.",
                "Programs require minimal equipment."
            ],
            philosophy: "Consistency > complexity.",
            achievements: [
                "Created online home fitness programs",
                "100k+ online followers"
            ],
        }
    },

    {
        id: "expert_mateo_r",
        slug: "andrea-f",
        avatar: "team9",
        username: "@andrea_f",
        rating: 4.8,
        subtitle: "Mediterranean Fitness",
        experience: "15 Years",
        education: "ACE, NASM",
        experienceLevel: "advanced",
        itemsCount: 310,
        bio: "Combines Mediterranean lifestyle with fitness and nutrition.",
        categories: ["Advanced"],
        specialties: ["Endurance", "Functional Training"],
        profile: {
            headline: "Fitness inspired by lifestyle",
            about: [
                "Andrea integrates diet, endurance, and strength training.",
                "Focus on holistic performance and longevity."
            ],
            philosophy: "Healthy lifestyle supports fitness goals.",
            achievements: [
                "Coached professional endurance athletes",
                "Author of Mediterranean fitness guides"
            ],
        }
    },

    {
        id: "expert_nina_p",
        slug: "katarina-i",
        avatar: "team16",
        username: "@katarina_i",
        rating: 4.6,
        subtitle: "Eastern European Fitness",
        experience: "12 Years",
        education: "NASM, FMS",
        experienceLevel: "intermediate",
        itemsCount: 200,
        bio: "Traditional Eastern European training methods modernized.",
        categories: ["Intermediate"],
        specialties: ["Strength", "Mobility"],
        profile: {
            headline: "Modern training with traditional roots",
            about: [
                "Katarina combines Eastern European strength techniques with mobility training.",
                "Focuses on safe, effective methods."
            ],
            philosophy: "Respect roots, refine execution.",
            achievements: [
                "Certified functional training coach",
                "Organized fitness workshops"
            ],
        }
    },

    {
        id: "expert_ivan_v",
        slug: "maksim-o",
        avatar: "team8",
        username: "@maksim_o",
        rating: 4.7,
        subtitle: "Athletic Conditioning",
        experience: "10 Years",
        education: "CSCS, NASM",
        experienceLevel: "advanced",
        itemsCount: 230,
        bio: "Conditioning programs for athletes of all levels.",
        categories: ["Advanced"],
        specialties: ["Athletic Conditioning", "Strength"],
        profile: {
            headline: "Train like an athlete",
            about: [
                "Maksim creates sport-specific conditioning programs.",
                "Improves performance, endurance, and strength."
            ],
            philosophy: "Train smart, perform better.",
            achievements: [
                "Worked with professional sports teams",
                "Athletic performance consultant"
            ],
        }
    }
];