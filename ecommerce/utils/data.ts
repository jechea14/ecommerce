import { Product } from "../interfaces";

export const ProductData: Product[] = [
    {
        id: 1,
        name: "Gateron Oil King Linear Switches",
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
                ]
    },
    {
        id: 2,
        name: "C³Equalz X TKC Tangerine Linear Switches",
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
                ]
    },

]