import { Expert } from "@/types/expert";

export function getExpertBySlug(slug: string) {
    return experts.find((e) => e.slug === slug);
}

export const experts: Expert[] = [
    {
        id: "expert_marcus_l",
        slug: "marcus-laurent",
        avatar: "team4",
        fullName: "Marcus Laurent",
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
                "Marcus helps athletes maximize strength safely.",
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
        slug: "sarah-johnson",
        avatar: "team2",
        fullName: "Sarah Johnson",
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
                "Sarah combines training and nutrition.",
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
        slug: "kenji-tanaka",
        avatar: "team1",
        fullName: "Kenji Tanaka",
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
                "Kenji focuses on joint health and mobility.",
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
        slug: "maria-garcia",
        avatar: "team3",
        fullName: "Maria Garcia",
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
                "Maria integrates strength and endurance.",
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
        slug: "alex-robinson",
        avatar: "team5",
        fullName: "Alex Robinson",
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
                "Alex helps beginners start confidently.",
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
        slug: "luca-bianchi",
        avatar: "team6",
        fullName: "Luca Bianchi",
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
                "Luca preserves classic methods and modernizes workouts.",
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
        slug: "emily-chen",
        avatar: "team11",
        fullName: "Emily Chen",
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
                "Emily guides clients to strength, flexibility, and mental clarity.",
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
        slug: "david-miller",
        avatar: "team7",
        fullName: "David Miller",
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
                "David designs endurance programs for athletes and hobbyists.",
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
        slug: "anna-kowalska",
        avatar: "team12",
        fullName: "Anna Kowalska",
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
                "Anna creates personalized plans combining training and nutrition.",
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
        slug: "pierre-dubois",
        avatar: "team8",
        fullName: "Pierre Dubois",
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
                "Pierre has trained professional athletes across multiple sports.",
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
        slug: "sofia-novak",
        avatar: "team13",
        fullName: "Sofia Novak",
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
                "Sofia creates programs improving posture, balance, and flexibility.",
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
        slug: "omar-hassan",
        avatar: "team9",
        fullName: "Omar Hassan",
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
                "Omar builds strength and endurance through functional movements.",
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
        slug: "julia-schneider",
        avatar: "team15",
        fullName: "Julia Schneider",
        rating: 4.5,
        subtitle: "Home Fitness",
        experience: "7 Years",
        education: "ISSA Certified",
        experienceLevel: "beginner",
        itemsCount: 140,
        bio: "Provides beginner-friendly home workouts.",
        categories: ["Beginner"],
        specialties: ["Bodyweight Training", "Home Fitness"],
        profile: {
            headline: "Get fit at home with ease",
            about: [
                "Julia designs short, effective routines for home use.",
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
        slug: "mateo-rossi",
        avatar: "team10",
        fullName: "Mateo Rossi",
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
                "Mateo integrates diet, endurance, and strength training.",
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
        slug: "nina-petrov",
        avatar: "team14",
        fullName: "Nina Petrov",
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
                "Nina combines Eastern European strength techniques with mobility training.",
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
        slug: "ivan-volkov",
        avatar: "team15",
        fullName: "Ivan Volkov",
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
                "Ivan creates sport-specific conditioning programs.",
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