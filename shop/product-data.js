// Single source of truth for all product information

const productsData = {
    powerModulePCB: {
        // Card Information
        name: "Power Module - PCB",
        shortDescription: "Central power and communication hub with rechargeable batteries, MedRadio wireless communication, and network coordination for the entire COSMIIC System.",
        price: "1,450",
        imageType: "img",
        image: "product-img/pm-pcb.jpg",
        comingSoon: false,
        
        // Modal Information
        fullDescription: "The COSMIIC Power Module PCB is the central component of the COSMIIC System that manages power and communication delivery to the connected remote modules on the network, battery charging, wireless MedRadio communication, and embedded control functions.",
        features: [
            "Rigid PCB design",
            "Houses rechargeable Li-ion batteries (3 cells in parallel)",
            "Contains Wireless Link for communication and programming",
            "Distributes power to all remote modules",
            "32-bit ARM-7 microprocessor with RTOS for signal processing",
            "Optional Add-On: Frame Board (+$215)"
        ],
        additionalInfo: "The optional Frame Board provides a standardized breakout interface for supplemental connections. It allows for easy connectivity among all COSMIIC circuit boards.",
        warning: null
    },
    
    pg4ModulePCB: {
        name: "PG4 Module - PCB",
        shortDescription: "Four-channel pulse generator module utilized for electrical stimulation of nerve and muscle tissue.",
        price: "1,000",
        imageType: "img",
        image: "product-img/pg4-pcb-hori.jpg",
        comingSoon: false,
        
        fullDescription: "The COSMIIC PG4 Module PCB can deliver stimulation to four independent monopolar electrodes, typically using the metal case of the implantable module as the common return electrode. The PG4 PCB gains power from the network, receives data from the network that is utilized to determine the stimulation parameters that should be delivered, and places data on the network regarding its status.",
        features: [
            "Rigid PCB design",
            "4-channel electrical stimulation interface",
            "Networked architecture for multi-module systems",
            "Built-in hardware and software stimulation safety limits",
            "Onboard AVR-core processor (AT90CAN128)",
            "Adaptable for custom electrode arrays",
            "Optional Add-On: Frame Board (+$215)"
        ],
        additionalInfo: "The optional Frame Board provides a standardized breakout interface for supplemental connections. It allows for easy connectivity among all COSMIIC circuit boards. Multiple PG4 boards can be connected through the network, allowing the system to scale in increments of four channels and provide as many monopolar stimulation outputs as the application requires.",
        warning: null
    },
    
    bp2ModulePCB: {
        name: "BP2 Module - PCB",
        shortDescription: "Two-channel biopotential recording module designed to record myoelectric signals and process them independently for different control needs.",
        price: "1,000",
        imageType: "img",
        image: "product-img/bp2-pcb-hori.jpg",
        comingSoon: false,
        
        fullDescription: "The COSMIIC BP2 Module PCB records myoelectric signals (MES) from two independent muscles using bipolar epimysial or intramuscular electrodes. The BP2 PCB gains power from the network, receives configuration data to set recording and processing parameters, and places two channels of processed MES data onto the network for use by other modules in the system.",
        features: [
            "Rigid PCB design",
            "2-channel biopotential recording",
            "Networked architecture for multi-module systems",
            "Onboard AVR-core processor (AT90CAN128)",
            "Real-time signal conditioning and MES processing",
            "Optional Add-On: Frame Board (+$215)"
        ],
        additionalInfo: "The optional Frame Board provides a standardized breakout interface for supplemental connections and allows for easy benchtop integration with other COSMIIC circuit boards. Multiple BP2 boards can be connected through the network, enabling scalable multi-muscle recording and providing processed control signals to any module within the system.",
        warning: null
    },
    
    powerModuleImplant: {
        name: "Power Module",
        shortDescription: "Assembled and enclosed COSMIIC System Power Module. For research use only.",
        price: "15,000",
        priceClass: "text-muted",
        imageType: "img",
        image: "product-img/pm-enclosed.png",
        comingSoon: true,
        
        fullDescription: "The COSMIIC Power Module is the power and communication hub of the implanted system, housing the rechargeable Li-ion batteries, inductive recharge coil, and MedRadio wireless link within a durable titanium enclosure designed for torso implantation. It distributes power to all connected modules, provides system-level communication and programming, and includes an internal magnetic failsafe switch for immediate shutdown.",
        features: null,
        additionalInfo: [
            "An optional add-on service is available to sterilize the implantable device. We facilitate sending the devices to an FDA-registered contract sterilizer using a proven sterilization protocol to ensure safe handling for research applications.",
            "This implantable device is not currently available for immediate purchase, but you may request a quote. Please note that production and fulfillment involve a long lead time."
        ],
        warning: '<span style="color: red; font-weight: bold;">WARNING:</span> This device is intended for research use only. Open NeuroTech is not the manufacturer and acts solely as a distributor of this device. While the device has been manufactured to high-quality standards and is approved under an FDA IDE for a specific early-feasibility study, it is not certified for general implantation or use in humans. Researchers must obtain their own regulatory approvals to use this device in human studies. Your personal decision to purchase and ultimately the safe use of these devices is strictly your responsibility and at your own risk.'
    },
    
    pg4ModuleImplant: {
        name: "PG4 Module",
        shortDescription: "Assembled and enclosed COSMIIC System PG4 Module. For research use only.",
        price: "11,600",
        priceClass: "text-muted",
        imageType: "img",
        image: "product-img/branded-stim-module.jpg",
        comingSoon: true,
        
        fullDescription: "The four-channel pulse generator module (PG4) is a remote module utilized for electrical stimulation of nerve and muscle tissue. The PG4 can deliver stimulation to four independent monopolar electrodes, using the metal case of the PG4 as the common return electrode. The PG4 is small enough to be located in the extremities, including the upper arm and forearm, thus minimizing electrode lead length and simplifying surgical lead routing. It is connected to the COSMIIC network through a single network cable and has four total network connections, allowing a single PG4 to branch from a single network input to three network outputs.",
        features: null,
        additionalInfo: [
            "An optional add-on service is available to sterilize the implantable device. We facilitate sending the devices to an FDA-registered contract sterilizer using a proven sterilization protocol to ensure safe handling for research applications.",
            "This implantable device is not currently available for immediate purchase, but you may request a quote. Please note that production and fulfillment involve a long lead time."
        ],
        warning: '<span style="color: red; font-weight: bold;">WARNING:</span> This device is intended for research use only. Open NeuroTech is not the manufacturer and acts solely as a distributor of this device. While the device has been manufactured to high-quality standards and is approved under an FDA IDE for a specific early-feasibility study, it is not certified for general implantation or use in humans. Researchers must obtain their own regulatory approvals to use this device in human studies. Your personal decision to purchase and ultimately the safe use of these devices is strictly your responsibility and at your own risk.'
    },
    
    bp2ModuleImplant: {
        name: "BP2 Module",
        shortDescription: "Assembled and enclosed COSMIIC System BP2 Module. For research use only.",
        price: "11,600",
        imageType: "img",
        image: "product-img/bp2-connected.jpg",
        comingSoon: true,
        
        fullDescription: "The two-channel biopotential recording module (BP2) can record MES from two different muscles and process the signals independently for different control needs. The recording electrodes can be either an epimysial or intramuscular design and consist of two metal contacts separated by 1cm for differential recording. The BP2 is sized small enough so that it can be located in the extremities, near the muscles to be recorded from. This has the advantage of reducing the lead length, improving the signal quality and minimizing the range of electrode lead lengths that need to be brought into surgery.",
        features: null,
        additionalInfo: [
            "An optional add-on service is available to sterilize the implantable device. We facilitate sending the devices to an FDA-registered contract sterilizer using a proven sterilization protocol to ensure safe handling for research applications.",
            "This implantable device is not currently available for immediate purchase, but you may request a quote. Please note that production and fulfillment involve a long lead time."
        ],
        warning: '<span style="color: red; font-weight: bold;">WARNING:</span> This device is intended for research use only. Open NeuroTech is not the manufacturer and acts solely as a distributor of this device. While the device has been manufactured to high-quality standards and is approved under an FDA IDE for a specific early-feasibility study, it is not certified for general implantation or use in humans. Researchers must obtain their own regulatory approvals to use this device in human studies. Your personal decision to purchase and ultimately the safe use of these devices is strictly your responsibility and at your own risk.'
    },
    
    imStimElectrode: {
        name: "Intramuscular Stimulus Electrode",
        shortDescription: "An implanted lead connected to the PG4 Module placed in a muscle that delivers electrical pulses to activate the nerves controlling that muscle. For research use only.",
        price: "1,450",
        imageType: "img",
        image: "product-img/Stim-IM.jpg",
        comingSoon: false,
        
        fullDescription: "Electrical stimulation is delivered through metal electrodes placed near or in direct contact with neural tissue. Each electrode consists of the contact itself, a conducting lead, and a dual-contact connector to mate to the PG4 module. The intramuscular stimulating electrode is designed to be inserted into the belly of the target muscle. The intramuscular stimulating surface is 2mm long with an approximate surface area of 8 mm2. A 2-mm long polypropylene barbed anchor on the tip of the electrode maintains the position of the electrode in soft tissue. The electrode is inserted into the muscle using the IM Electrode Insertion Kit.",
        features: null,
        additionalInfo: [
            "These electrodes are available in lengths from 15cm to 70cm, in 5cm increments to suit different implantation sites and lead routing needs.",
            "An optional add-on service is available to sterilize the implantable device. We facilitate sending the devices to an FDA-registered contract sterilizer using a proven sterilization protocol to ensure safe handling for research applications."
        ],
        warning: '<span style="color: red; font-weight: bold;">WARNING:</span> This device is intended for research use only. Open NeuroTech is not the manufacturer and acts solely as a distributor of this device. While the device has been manufactured to high-quality standards and is approved under an FDA IDE for a specific early-feasibility study, it is not certified for general implantation or use in humans. Researchers must obtain their own regulatory approvals to use this device in human studies. Your personal decision to purchase and ultimately the safe use of these devices is strictly your responsibility and at your own risk.'
    },
    
    imRecordingElectrode: {
        name: "Intramuscular Recording Electrode",
        shortDescription: "An implanted lead connected to the BP2 Module placed in a muscle that records MES signals. For research use only.",
        price: "1,450",
        imageType: "img",
        image: "product-img/Recording-IM.jpg",
        comingSoon: false,
        
        fullDescription: "Myoelectric signals (MES) are acquired through bipolar conductive contacts placed within the target muscle. The electrical signal transmitted out from the motor point of the muscle is picked up by each contact. Differential amplification is used to extract the muscle signal. Each recording electrode consists of two metal contacts, a two conductor lead, and a connector that mates with the BP2 module. The intramuscular recording electrode is designed to be inserted into the belly of the target muscle. A 2-mm long polypropylene barbed anchor on the tip of the electrode maintains the position of the electrode in soft tissue. The electrode is inserted into the muscle using the IM Electrode Insertion Kit.",
        features: null,
        additionalInfo: [
            "These electrodes are available in lengths from 15cm to 70cm, in 5cm increments to suit different implantation sites and lead routing needs.",
            "An optional add-on service is available to sterilize the implantable device. We facilitate sending the devices to an FDA-registered contract sterilizer using a proven sterilization protocol to ensure safe handling for research applications."
        ],
        warning: '<span style="color: red; font-weight: bold;">WARNING:</span> This device is intended for research use only. Open NeuroTech is not the manufacturer and acts solely as a distributor of this device. While the device has been manufactured to high-quality standards and is approved under an FDA IDE for a specific early-feasibility study, it is not certified for general implantation or use in humans. Researchers must obtain their own regulatory approvals to use this device in human studies. Your personal decision to purchase and ultimately the safe use of these devices is strictly your responsibility and at your own risk.'
    },
    
    epiRecordingElectrode: {
        name: "Epimysial Recording Electrode",
        shortDescription: "An implanted lead connected to the BP2 Module placed on a muscle that records MES signals. For research use only.",
        price: "2,200",
        imageType: "img",
        image: "product-img/epi-macro.png",
        comingSoon: false,
        
        fullDescription: "Myoelectric signals (MES) are acquired through bipolar conductive contacts placed on the target muscle. The electrical signal transmitted out from the motor point of the muscle is picked up by each contact. Differential amplification is used to extract the muscle signal. Each recording electrode consists of two metal contacts, a two conductor lead, and a connector that mates with the BP2 module. The epimysial stimulating electrode is a platinum-iridium disk with a brim supported by polyester mesh reinforced silicone rubber. The exposed metal contact is a disc 3.3 mm in diameter with a surface area of 8.55 mm2. The brim is sandwiched between two layers of silicone elastomer, leaving the conducting surface exposed through a hole in the top layer. The electrode is sewn onto the muscle epimysium using sutures through the polyester mesh backing.",
        features: null,
        additionalInfo: [
            "These electrodes are available in lengths from 15cm to 70cm, in 5cm increments to suit different implantation sites and lead routing needs.",
            "An optional add-on service is available to sterilize the implantable device. We facilitate sending the devices to an FDA-registered contract sterilizer using a proven sterilization protocol to ensure safe handling for research applications."
        ],
        warning: '<span style="color: red; font-weight: bold;">WARNING:</span> This device is intended for research use only. Open NeuroTech is not the manufacturer and acts solely as a distributor of this device. While the device has been manufactured to high-quality standards and is approved under an FDA IDE for a specific early-feasibility study, it is not certified for general implantation or use in humans. Researchers must obtain their own regulatory approvals to use this device in human studies. Your personal decision to purchase and ultimately the safe use of these devices is strictly your responsibility and at your own risk.'
    },
    
    networkCable: {
        name: "Network Cable",
        shortDescription: "An implanted lead that connects all implanted COSMIIC modules. For research use only.",
        price: "2,350",
        imageType: "img",
        image: "product-img/nc-macro.png",
        comingSoon: false,
        
        fullDescription: "The Network Cable is the conduit for conducting power and communications between implanted modules in the COSMIIC System. Power on the Network Cable is provided by connection to the Power Module's rechargeable battery. Network communication can be generated on the Network Cable by any module. The Network Cable is a critical component of the COSMIIC System because all remote modules depend on its proper functioning for power and communication. Every remote module must be connected to the COSMIIC System network through a Network Cable.",
        features: null,
        additionalInfo: [
            "These electrodes are available in lengths from 15cm to 70cm, in 5cm increments to suit different implantation sites and lead routing needs.",
            "An optional add-on service is available to sterilize the implantable device. We facilitate sending the devices to an FDA-registered contract sterilizer using a proven sterilization protocol to ensure safe handling for research applications."
        ],
        warning: '<span style="color: red; font-weight: bold;">WARNING:</span> This device is intended for research use only. Open NeuroTech is not the manufacturer and acts solely as a distributor of this device. While the device has been manufactured to high-quality standards and is approved under an FDA IDE for a specific early-feasibility study, it is not certified for general implantation or use in humans. Researchers must obtain their own regulatory approvals to use this device in human studies. Your personal decision to purchase and ultimately the safe use of these devices is strictly your responsibility and at your own risk.'
    },
    /* Commenting out for now since this product is not currently available for purchase. We can add it back in when we are ready to sell it.
    imInsertionKit: {
        name: "IM Electrode Insertion Kit",
        shortDescription: "For implanting the COSMIIC intramuscular electrodes.",
        price: "TBD",
        priceClass: "text-muted",
        imageType: "icon",
        image: "tool",
        comingSoon: true,
        
        fullDescription: "A surgeon-controlled electrical stimulation device is used to map the location of electrodes intraoperatively. Intramuscular electrode insertion requires specially-designed tools to allow insertion of electrodes with the COSMIIC-style connectors.",
        features: null,
        additionalInfo: [
            "These tools can be autoclaved by the purchaser. We do not offer a sterilization service for this product.",
            "These tools are not currently available for purchase."
        ],
        warning: null
    },
    */
    
    touchproofWires: {
        name: "Touchproof Snap Lead Wires",
        shortDescription: "For use with the COSMIIC BP2 development board.",
        price: "50",
        priceClass: "text-muted",
        imageType: "icon",
        image: "activity",
        comingSoon: true,
        
        fullDescription: "These Med-Dyne touchproof snap lead wires with DIN connectors provide secure, reliable connections for use with the BP2 development board. Compatible with snap hydrogel or other recording electrodes, they ensure accurate myoelectric signal transmission.",
        features: null,
        additionalInfo: null,
        warning: null
    },
    
    consulting: {
        name: "Consulting Services",
        shortDescription: "Expert guidance to accelerate your development and navigate the technical and regulatory landscape with confidence. Hourly or Project-Based",
        price: "TBD",
        priceClass: "text-muted",
        imageType: "icon",
        image: "users",
        comingSoon: true,
        
        fullDescription: "Our team brings decades of combined experience in neurotechnology research, medical device development, and regulatory affairs. We provide expert consulting to help you navigate the complex landscape of neural interface development and commercialization.",
        features: [
            "Neural interface technology assessment and selection",
            "Firmware development",
            "Lab setup integration and training",
            "Regulatory strategy for IDE pre-submission and submission",
            "Technology transfer and manufacturing scale-up"
        ],
        subsections: [
            {
                title: "Who We Work With:",
                items: [
                    "Academic research laboratories",
                    "Medical device startups",
                ]
            }
        ],
        additionalInfo: "We offer flexible engagement models including hourly consulting and fixed-price projects. Initial consultations are available to discuss your needs and develop an engagement plan.",
        warning: null
    }
};