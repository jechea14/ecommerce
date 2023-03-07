import { Product, Menu, HeroSectionImages } from "../interfaces";

export const HeroSectionData: HeroSectionImages[] = [
    {
        id: 1,
        image: '/images/heroSection/GMK_Electric_Keycaps.webp'
    },
    {
        id: 2,
        image: '/images/heroSection/ePBT_Origami_Keycaps.webp'
    },
    // {
    //     id: 3,
    //     image: '/images/heroSection/QK_80.webp'
    // }
]

export const MenuData: Menu[] = [
    {
        id: 1,
        name: "Switches"
    },
    {
        id: 2,
        name: "Keycaps"
    },
    {
        id: 3,
        name: "Keyboards"
    }
]

export const ProductData: Product[] = [
    {
        id: 1,
        name: "Gateron Oil King Linear Switches",
        slug: "gateron-oil-king-linear-switches",
        price: 9.95,
        amount: 18,
        image: ["/images/gateron_oil_king1.webp", "/images/gateron_oil_king2.webp", "/images/gateron_oil_king3.webp", "/images/gateron_oil_king4.webp"],
        description: "Gateron Oil King Switches are linear switches with a Nylon PA66 top housing and bottom housing consisting of Ink housing material.",
        feature: [
                    "18 included in each pack", 
                    "Linear",
                    "Stem: POM",
                    "Top Housing: Nylon PA66",
                    "Bottom Housing: Ink Housing Material",
                    "Actuation: 55±5g",
                    "Bottom Out: 65±5g",
                    "Spring: 20mm",
                    "Total Travel: 4.0mm",
                    "PCB Mount, 5-Pin",
                    "MX Style",
                    "Factory Lubed"
                ],
        productType: "Switch",
        switchType: "Linear"
    },
    {
        id: 2,
        name: "C3Equalz X TKC Tangerine Linear Switches",
        slug: "c3equalz-x-tkc-tangerine-linear-switches",
        price: 11.70,
        amount: 18,
        image: ["/images/tangerine1.webp", "/images/tangerine2.webp"],
        description: "TKC Tangerine switches are linear switches made in collaboration with C³Equalz. Popular for its unique and distinguishable color design without compromising its smooth keypress. Also known as tangies.",
        feature: [
                    "18 included in each pack", 
                    "Linear",
                    "C³Equalz Designed",
                    "Housing: UHMWPE",
                    "PCB Mount, 5-Pin",
                    "Lightly Factory Lubed",
                    "MX-Style",
                ],
        productType: "Switch",
        switchType: "Linear"
    },
    {
        id: 3,
        name: "SP-Star Meteor White Linear Switches",
        slug: "sp-star-meteor-white-linear-switches",
        price: 9.18,
        amount: 18,
        image: ["/images/sp-star-meteor1.webp", "/images/sp-star-meteor2.webp", "/images/sp-star-meteor3.webp"],
        description: "SP-Star Meteor White is a linear switch with a full nylon housing and a POM stem.",
        feature: [
                    "18 included in each pack", 
                    "Linear",
                    "Top Housing: Nylon",
                    "Bottom Housing: Nylon",
                    "Stem: POM",
                    "Spring: 57g",
                    "PCB Mount, 5-Pin",
                    "Factory Lubed",
                    "MX-Style",
                ],
        productType: "Switch",
        switchType: "Linear"
    },
    {
        id: 4,
        name: "Zeal Zealios V1 Redux Tactile Switches",
        slug: "zeal-zealios-v1-redux-tactile-switches",
        price: 8.50,
        amount: 10,
        image: ["/images/zeal-zealios-v1-redux1.webp", "/images/zeal-zealios-v1-redux2.webp", "/images/zeal-zealios-v1-redux3.webp"],
        description: "Zeal is bringing back the Zealios V1 switches back to fill in the growing scarcity of quality, medium tactile switches. These version 1 switches were first introduced in 2015 and was the switch that spearheaded the boutique switch market to where it is today. After popular demand, it is coming out of retirement to solidify its place as the medium tactile switch to have.",
        feature: [
                    "10 included in each pack", 
                    "Tactile",
                    "Top Housing: Nylon",
                    "Bottom Housing: Nylon",
                    "Stem: POM",
                    "OG Zealios V1 Stem Mold",
                    "Bottom Out: 62g or 67g",
                    "Medium Tactile, Bump Mid-Travel",
                    'No SMD LED Cutout Underneath for Optimum Switch Acoustics, aka "thock"'
                ],
        productType: "Switch",
        switchType: "Tactile"
    },
    {
        id: 5,
        name: "C3Equalz X TKC Kiwi Tactile Switches",
        slug: "c3equalz-x-tkc-kiwi-tactile-switches",
        price: 11.70,
        amount: 18,
        image: ["/images/c3equalz-x-tkc-kiwi1.webp", "/images/c3equalz-x-tkc-kiwi2.webp", "/images/c3equalz-x-tkc-kiwi3.webp"],
        description: "TKC Kiwi Switches, in collaboration with C³Equalz, feature a tactile switch to add to their popular fruit series. The tactility can be noticed at the top of the key-press by a medium to medium-strong bump, however where the switch truly shines is in its satisfyingly snappy sound profile.",
        feature: [
                    "18 included in each pack", 
                    "Tactile (T1 Stem)",
                    "Actuation: 43g",
                    "Bottom Out: 67g",
                    "Gold-Plated Spring and Leaf",
                    "5-Pin PCB Mount",
                    "Lightly Factory Lubed",
                ],
        productType: "Switch",
        switchType: "Tactile"
    },
    {
        id: 6,
        name: "TTC Bluish White Tactile Switches",
        slug: "ttc-bluish-white-tactile-switches",
        price: 8.64,
        amount: 18,
        image: ["/images/ttc-bluish1.webp", "/images/ttc-bluish2.webp", "/images/ttc-bluish3.webp"],
        description: "TTC Bluish White features a unique, medium-tactility switch with a double coil long spring, silicone muted bottom, as well as a dustproof stem. By being a medium tactile switch with a light spring, it offers a snappy tactile without feeling too heavy.",
        feature: [
                    "18 included in each pack", 
                    "Tactile",
                    "Manufactured by TTC",
                    "MX Style",
                    "Pre-travel: 2.0mm",
                    "Tactile Position: 0.5mm",
                    "Total Travel: 3.5mm",
                    "Bottom-Out: 42g",
                    "Silicone Dampener",
                ],
        productType: "Switch",
        switchType: "Tactile"
    },
    {
        id: 7,
        name: "PBTfans™ WOB Keycap Set Doubleshot PBT",
        slug: "pbtfans-wob-keycap-set-doubleshot-pbt",
        price: 75.00,
        image: ["/images/keycaps/pbtfans_wob/pbtfans_wob1.webp", "/images/keycaps/pbtfans_wob/pbtfans_wob2.webp"],
        description: "PBTfans™ WOB Keycap Set showcases white legends on a black base keycap set with additional white accents. Coming in a doubleshot PBT material for more durability.",
        feature: [
                    "Cherry Profile", 
                    "Manufactured by PBTfans",
                    "Doubleshot",
                    "PBT Material",
                    "MX Compatible",
                ],
        productType: "Keycap",
    },
    {
        id: 8,
        name: "JTK Night Sakura",
        slug: "jtk-night-sakura",
        price: 99.00,
        image: ["/images/keycaps/nightSakura/NightSakura_Base_.webp"],
        description: "PBTfans™ WOB Keycap Set showcases white legends on a black base keycap set with additional white accents. Coming in a doubleshot PBT material for more durability.",
        feature: [
                    "Cherry Profile", 
                    "Material : ABS Double-shot",
                    "Made by JTK",
                    "Designed by Rifen",
                ],
        productType: "Keycap",
    },
    {
        id: 9,
        name: "PBTfans Klein Blue Keycap Set Doubleshot ABS",
        slug: "pbtfans-klein-blue-keycap-set-doubleshot-abs",
        price: 75.00,
        image: ["/images/keycaps/pbtfansKleinBlue/pbtfans_klein_blue1.webp", "/images/keycaps/pbtfansKleinBlue/pbtfans_klein_blue2.webp", "/images/keycaps/pbtfansKleinBlue/pbtfans_klein_blue3.webp"],
        description: "PBTfans Klein Blue Keycap Set takes inspiration from one of the greatest artists in history, Yves Klein. Bringing heavy influence on ultramarine, the blue used in this keycap set features a semi-transparent material very similar to what is found on another popular set, PBTfans Neon.",
        feature: [
                    "Cherry Profile", 
                    "Manufactured by PBTfans",
                    "ABS Material (Semi-Transparent)",
                    "Doubleshot (Sub-legends UV Printed)",
                    "MX Compatible"
                ],
        productType: "Keycap",
    },
    {
        id: 10,
        name: "NK87™ - Darkshake Edition",
        slug: "nk87-darkshake-edition",
        price: 225.00,
        image: ["/images/nk87/NK87_DarkMilkshake1.webp", "/images/nk87/NK87_DarkMilkshake2.webp", "/images/nk87/NK87_DarkMilkshake3.webp"],
        description: "The NK87™ - Darkshake Edition is an injection-molded TKL keyboard with a hotswap PCB assembled with Silk Milkshake switches and PBT dyesub keycaps.",
        feature: [
                    "Hotswap", 
                    "VIA Compatible",
                    "USB C",
                    "Per switch RGB lighting (programmable via VIA)",
                    "Injection Molded Polycarbonate Case",
                    "Injection Molded Polycarbonate Plate"
                ],
        productType: "Keyboard",
    },

]