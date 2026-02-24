import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // ─── VideoSection ───
      video: {
        overlay_1_title: "The Director's Canvas",
        overlay_1_desc:
          "Raw, authentic locations that breathe life into your narrative.",
        overlay_2_title: "Heritage Meets Horizon",
        overlay_2_desc:
          "A blank slate of natural wonder for your next masterpiece.",
        overlay_3_title: "Rolling Reels. Living Landscapes.",
        overlay_3_desc:
          "From rivers to highways, Bihar opens up as one continuous tracking shot.",
        overlay_4_title: "Every Road Is a Storyboard",
        overlay_4_desc:
          "Highways, village paths, misty mornings — your next scene is already waiting here.",
        overlay_5_title: "Where the River Writes the First Line",
        overlay_5_desc:
          "Quiet banks, soft light, endless horizon — a natural set for your opening frame.",
        overlay_6_title: "River Rhythms of Bihar",
        overlay_6_desc:
          "Crystal water, sand, and laughter — the kind of texture cameras love to linger on.",
        overlay_7_title: "Rohtas in Reflection",
        overlay_7_desc:
          "Still waters, rugged hills — a mirror for every mood from romance to rebellion.",
        overlay_8_title: "A Frame for Every Genre",
        overlay_8_desc:
          "Thriller, drama, docu or dreamscape — this blue expanse bends to your story.",
        overlay_9_title: "Plateaus that Feel Like Sets",
        overlay_9_desc:
          "Wind, rock, horizon — minimal, powerful, and made for wide-angle storytelling.",
        overlay_10_title: "Roots of Bihar. Scale of Cinema.",
        overlay_10_desc:
          "Ancient plateaus and emerald ridges that turn every frame into a poster shot.",
        overlay_11_title: "New Perspectives Unfold",
        overlay_11_desc:
          "Fresh angles and unseen corners waiting to be captured.",
        overlay_12_title: "Cinematic Horizons",
        overlay_12_desc:
          "Expand your visual vocabulary with these stunning vistas.",
      },

      // ─── Vr ───
      vr: {
        heading: "Bihar Film Location in VR",
        experience_prefix: "Experience",
        experience_suffix: "in Virtual Reality (VR):",
        learn_more: "Learn more",
        title_1: "Glass Bridge, Rajgir",
        desc_1:
          "Embark on a breathtaking virtual journey across the Glass Bridge of Rajgir, a marvel suspended between the hills. This architectural feat offers panoramic views of the lush valley and serene landscape below, giving the sensation of walking amidst the clouds. Perfect for thrill-seekers and nature lovers, the experience captures the tranquil grandeur of Rajgir's natural beauty combined with the thrill of height and modern engineering.",
        title_2: "Ghora Katora, Rajgir",
        desc_2:
          "Immerse yourself in the peaceful aura of Ghora Katora, a natural horse-shaped lake nestled among the hills of Rajgir. Surrounded by lush forests and often graced by migratory birds, this sacred and scenic waterbody is a hidden gem of Bihar. The VR experience lets you witness the stillness of the lake, the chirping of birds, and the gentle whispers of the wind through surrounding trees—ideal for those seeking serenity in nature's lap.",
        title_3: "Jungle Safari Entry, Rajgir",
        desc_3:
          "Begin your adventure through the gateway of Rajgir's Jungle Safari, where the wilderness greets you with open arms. This VR experience captures the excitement of entering a dense forest reserve with curated animal zones, nature trails, and eco-friendly walkways. Feel the anticipation build as you cross into an area teeming with wildlife, blending education, conservation, and adventure into one memorable virtual journey.",
        title_4: "Pawapuri, Nalanda",
        desc_4:
          "Take a spiritual deep dive into the sacred town of Pawapuri in Nalanda, where Lord Mahavira, the 24th Jain Tirthankara, attained nirvana. In this VR experience, float virtually to the heart of Jal Mandir—a marble temple surrounded by a lotus-filled lake. Feel the holiness, heritage, and tranquility as you walk across the stone bridge leading to the temple, immersed in centuries-old devotion and peace.",
        title_5: "Bapu Tower, Patna",
        desc_5:
          "Relive Bihar's revolutionary spirit through the towering structure of Bapu Tower in Patna, a tribute to Mahatma Gandhi's influence on the freedom movement in Bihar. The VR experience walks you through the symbolic architecture, plaques, and scenic surroundings, letting you sense the historic weight and inspiring atmosphere. It's more than a monument—it's a reminder of struggle, unity, and vision.",
        title_6: "Hiuen Tsang Memorial Hall, Nalanda",
        desc_6:
          "Travel back in time to the ancient seat of learning through the Hiuen Tsang Memorial Hall in Nalanda. This VR journey narrates the story of the legendary Chinese traveler and scholar who spent years absorbing the teachings of Nalanda University. Walk through intricately carved corridors, ancient manuscripts, and statues that reflect Indo-Chinese cultural synergy. A tribute to knowledge and global exchange, this memorial is both artistic and intellectually enriching.",
      },

      // ─── FilmClub ───
      filmClub: {
        heading: "FilmClub",
        subtitle:
          "Discover, explore, and celebrate the art of cinema through immersive experiences and meaningful conversations.",
        card_1_title: "Coffee With Film",
        card_1_desc:
          "Think critically to improve young people's imagination and creativity skills through cinematic discussions.",
        card_2_title: "Cine Samvad",
        card_2_desc:
          "Explore engaging content and the vibrant film industry of Bihar through interactive sessions.",
        card_3_title: "Cine Activites",
        card_3_desc:
          "Engage in detailed movie discussions with presentations, embedded clips, and interactive worksheets.",
        explore_program: "Explore Program",
      },

      // ─── Actors ───
      actors: {
        heading: "Celebrities of Bihar",
        dob_label: "Date of Birth:",
        district_label: "District:",
        dob_short: "DOB",
        district_short: "District",
        about: "About",
        view_profile: "View Profile",
        p1_occ: "Actor",
        p1_desc:
          "Renowned for powerful roles in independent and commercial films.",
        p1_dist: "West Champaran",
        p2_occ: "Actor",
        p2_desc: "Famous for his versatility and natural acting style.",
        p2_dist: "Gopalganj",
        p3_occ: "Producer & Actor",
        p3_desc:
          "Renowned filmmaker known for his political and socio-political films.",
        p3_dist: "Bettiah, West Champaran",
        p4_occ: "Actor",
        p4_desc: "Veteran actor and politician, iconic in 70s-80s cinema.",
        p4_dist: "Patna",
        p5_occ: "Actor",
        p5_desc: "Talented actor known for heartfelt performances.",
        p5_dist: "Patna",
        p6_occ: "Actress",
        p6_desc: "Actress and model with presence in films and web series.",
        p6_dist: "Bhagalpur",
        p7_occ: "Actress",
        p7_desc:
          "Indian actress known for her roles in Hindi, Tamil, and Telugu cinema.",
        p7_dist: "Patna",
        p8_occ: "Actor",
        p8_desc:
          "Actor known for comedy roles in Bheja Fry and Khosla Ka Ghosla.",
        p8_dist: "Bhojpur, Bihar",
        p9_occ: "Film Director & Writer",
        p9_desc:
          "Renowned Indian film director, producer, and writer known for his brilliant work",
        p9_dist: "Jamshedpur (then Bihar)",
        p10_occ: "Actor",
        p10_desc: "Celebrated for comic timing and strong character roles.",
        p10_dist: "Darbhanga",
        p11_occ: "Entrepreneur, Producer, Director, Actor",
        p11_desc:
          "Founder of TVF, known for web series like 'Permanent Roommates' and 'Pitchers'.",
        p11_dist: "Muzaffarpur",
        p12_occ: "Actor",
        p12_desc:
          "TV and film actor popular for mythological and action roles.",
        p12_dist: "Bhagalpur",
        p13_occ: "Actor",
        p13_desc:
          "Known for his warm, authentic portrayal of Vikas Shukla in 'Panchayat'.",
        p13_dist: "Mahnar (Vaishali district)",
        p14_occ: "Actor",
        p14_desc:
          "Bihari-born actor known for winning hearts as 'Binod' in Panchayat.",
        p14_dist: "Darveshpur, near Siwan",
        p15_occ: "Actor, Painter, Writer, Director",
        p15_desc:
          "Actor, acclaimed for his grounded portrayal of MLA Chandu Singh in Panchayat",
        p15_dist: "Saharsa",
        p16_occ: "Actor",
        p16_desc: "Actor known for playing Bhushan in Panchayat.",
        p16_dist: "Darbhanga, Bihar",
        p17_occ: "Actor",
        p17_desc:
          "Actor from Bihar, known for his comical role as Madhav in Panchayat.",
        p17_dist: "Nawada",
        p18_occ: "Shehnai Maestro",
        p18_desc: "Legendary Shehnai player, Bharat Ratna awardee.",
        p18_dist: "Dumraon (Buxar)",
        p19_occ: "Folk Singer",
        p19_desc: "Voice of Bihar's folk heritage, especially during Chhath.",
        p19_dist: "Samastipur",
        p20_occ: "Folk/Classic Singer",
        p20_desc: "Young prodigy promoting Indian classical and folk music.",
        p20_dist: "Madhubani",
        p21_occ: "Folk Singer",
        p21_desc: "Folk singer reviving Bhojpuri and regional traditions.",
        p21_dist: "Patna",
      },

      // ─── Cinemaecosystem ───
      ecosystem: {
        heading: "Cinema Ecosystem",
        subtitle:
          "Explore the vibrant ecosystem that supports filmmaking from props and production assets to local artists and technician. Each element plays a crucial role in shaping authentic cinematic experiences.",
        card_1_title: "Production Assets",
        card_1_desc:
          "Access a comprehensive inventory of props and production equipment tailored for diverse cinematic requirements.",
        card_2_title: "Local Artists",
        card_2_desc:
          "Connect with a pool of talented local actors, singers, music and dance artists to bring authentic regional flavour to your productions.",
        card_3_title: "Local Technicians",
        card_3_desc:
          "Ensure a secure filming environment with professional safety services and on-location security management.",
      },

      // ─── GoverningBody ───
      governing: {
        heading: "Organizational Structure",
        tab_board: "Board of Directors",
        tab_management: "Management",
        tab_nodal: "Nodal Officers",
        tab_districts: "District Art and Culture Officers",
        // topImages
        top1_name: "Shri Mihir Kumar Singh, IAS",
        top1_title: "Director-cum-Chairman, BSFDFC",
        top1_subtitle: "(Development Commissioner, Government of Bihar)",
        top2_name: "Shri Pranav Kumar, IAS",
        top2_title: "Managing Director, BSFDFC",
        top2_subtitle: "Secretary (Art & Culture Department)",
        // boardMembers
        board1_name: "Shri Mihir Kumar Singh, IAS",
        board1_role:
          "Development Commissioner, Govt. of Bihar, & Director-cum-Chairman, Bihar State Film Development and Finance Corporation Limited",
        board2_name: "Shri Pranav Kumar, IAS",
        board2_role:
          "Secretary, Department of Art & Culture, Govt. of Bihar & Managing Director, Bihar State Film Development and Finance Corporation Limited",
        board3_name: "Shri Kundan Kumar, IAS",
        board3_role:
          "Secretary, Department of Industries, Govt. of Bihar & Nominee Director, Bihar State Film Development and Finance Corporation Limited",
        board4_name: "Shri Anupam Kumar, IAS",
        board4_role:
          "Secretary, Information and Public Relations Department, Govt. of Bihar & Nominee Director, Bihar State Film Development and Finance Corporation Limited",
        board5_name: "Shri Mukesh Kumar Lal, IAAS",
        board5_role:
          "Special Secretary, Department of Finance, Govt. of Bihar & Nominee Director, Bihar State Film Development and Finance Corporation Limited",
        // bodyMembers
        body1_name: "Smt. Ruby, IAS",
        body1_role: "General Manager, BSFDFC",
        body2_name: "Shri Arvind Ranjan Das",
        body2_role: "Consultant(Film)",
        body3_name: "V.D.Mishra",
        body3_role: "Consultant (Fin. & Account)",
        body4_name: "Sonika Kumari",
        body4_role: "Assistant Section Officer",
        body5_name: "Kumar Gaurav",
        body5_role: "Junior Consultant (Communication and Networking)",
        body6_name: "Leela Kumari Prasad",
        body6_role: "Data Entry Operator",
        body7_name: "Amit Ranjan",
        body7_role: "Data Entry Operator",
      },

      // ─── ContactPage ───
      contactPage: {
        heading: "Get in Touch",
        subtitle:
          "We are here to assist you with any queries related to film shooting, subsidies, and permissions in Bihar. Feel free to reach out to us through any of the following channels.",
        address_label: "Office Address",
        address_line1:
          "Bihar State Film Development & Finance Corporation Ltd.",
        address_line2: "Vikas Bhawan, New Secretariat,",
        address_line3: "Patna - 800015, Bihar, India",
        phone_label: "Phone Number",
        email_label: "Email Address",
      },

      // ─── FilmPolicy ───
      filmPolicy: {
        heading: "Film Policy",
        subtitle:
          "Discover the policies and subsidies powering Bihar's cinematic future — explore financial incentives and production support.",
        film_subsidy: "Film Subsidy Table",
        investment_subsidy: "Investment Subsidy Table",
        tv_serial_assistance:
          "Financial assistance for shooting of TV serials/shows in the State",
        ott_assistance:
          "Financial assistance for web series to be exhibited on OTT platforms",
        download_btn: "Download Complete Bihar New Film Policy (PDF)",
        // FilmSubsidyTable
        fst_col_category: "Film Category",
        fst_col_subsidy: "Grant / Subsidy",
        fst_col_criteria: "Criteria",
        fst_film1: "1st Film",
        fst_film2: "2nd Film",
        fst_film3: "3rd Film",
        fst_1_sub1:
          "Up to ₹2 Crore or 25% of total film cost, whichever is lower",
        fst_1_cri1: "Minimum 50% of total shooting days in the State",
        fst_1_sub2:
          "Up to ₹2.50 Crore or 25% of total film cost, whichever is lower",
        fst_1_cri2: "Minimum 75% of total shooting days in the State",
        fst_2_sub1:
          "Up to ₹2.75 Crore or 25% of total film cost, whichever is lower",
        fst_2_cri1: "Minimum 50% of total shooting days in the State",
        fst_2_sub2:
          "Up to ₹3.00 Crore or 25% of total film cost, whichever is lower",
        fst_2_cri2: "Minimum 75% of total shooting days in the State",
        fst_3_sub1:
          "Up to ₹3.50 Crore or 25% of total film cost, whichever is lower",
        fst_3_cri1: "Minimum 50% of total shooting days in the State",
        fst_3_sub2:
          "Up to ₹4.00 Crore or 25% of total film cost, whichever is lower",
        fst_3_cri2: "Minimum 75% of total shooting days in the State",
        // InvestmentSubsidyTable
        ist_col_slno: "Sl. No.",
        ist_col_scheme: "Grant Scheme",
        ist_col_min_cost: "Min Project Cost (in Lakhs)",
        ist_col_max_incentive: "Max Incentive (%)",
        ist_col_max_grant: "Max Grant Limit (in Lakhs)",
        ist_purpose1:
          "For setting up infrastructure like Film Set / Film City / Theme Park / Theme Village, Film Studio for VFX, Animation, Sound Recording / Dubbing, Color Correction.",
        ist_purpose2:
          "For Film Lighting, High Resolution Camera, Sound System, Dubbing etc. for film production and processing.",
        ist_purpose3: "For the establishment of a fully equipped studio.",
        ist_purpose4:
          "For the establishment of Animation and Computer Graphics Center and other technical facilities etc.",
        // FilmSubsidy (TV serials)
        fs_col_slno: "Sl. No.",
        fs_col_subsidy: "Subsidy (Financial Assistance)",
        fs_col_criteria: "Criteria",
        fs_sub1:
          "Up to 50 Lakhs or 25% of Total Production Cost (COP), whichever is lower",
        fs_cri1: "Minimum 45 days shooting inside the State",
        fs_sub2:
          "Up to 1 Crore or 25% of Total Production Cost (COP), whichever is lower",
        fs_cri2: "Minimum 90 days shooting inside the State",
        // OTTSubsidy
        ott_col_slno: "Sl. No.",
        ott_col_subsidy: "Subsidy (Financial Assistance)",
        ott_col_criteria: "Criteria",
        ott_sub1: "Up to 2 Crores or 25% of Production Cost (COP)",
        ott_cri1:
          "Minimum 50% of total shooting days or 30 days of shooting in the state",
        ott_sub2: "Up to 3 Crores or 25% of Production Cost (COP)",
        ott_cri2:
          "Minimum 70% of total shooting days or 60 days of shooting in the state",
      },

      // ─── VR Page ───
      vrPage: {
        heading: "Explore Bihar in Virtual Reality",
        subtitle:
          "Immerse yourself in the rich heritage and breathtaking landscapes of Bihar through our curated VR experiences.",
        vr_1: "Glass Bridge, Rajgir",
        vr_2: "Pawapuri Jalmandir, Nalanda",
        vr_3: "Jungle Safari, Rajgir",
        vr_4: "Ghora Katora, Rajgir",
        vr_5: "Jarasangh Ka Akhada, Rajgir",
        vr_6: "Hiuen Tsang Memorial Hall, Nalanda",
        vr_7: "Sabhyata Dwar, Patna",
        vr_8: "Golghar, Patna",
        vr_9: "Buddha Smiriti Park, Patna",
        vr_10: "Bapu Tower, Patna",
        vr_11: "Shantivan, Rajgir",
        vr_12: "Venuvan, Rajgir",
        vr_13: "Ropeway, Rajgir",
        vr_14: "Ancient Nalanda University, Rajgir",
        vr_15: "New Nalanda University, Rajgir",
      },

      // ─── AboutUs Page ───
      aboutUs: {
        hero_title: "Bihar: The Emerging Powerhouse of Indian Cinema",
        hero_subtitle:
          "A land of rich heritage, iconic legends, and untold stories waiting to be captured.",
        legends_heading: "Legends from Bihar",
        legends_desc:
          "Bihar has been home to some of the most iconic personalities who have shaped Indian film history.",
        bsfdfc_heading: "BSFDFC: Nurturing Bihar's Cinematic Legacy",
        bsfdfc_para1:
          "The Bihar State Film Development & Finance Corporation Ltd. (BSFDFC) continues to strengthen this legacy by promoting film culture and incentivizing regional cinema. Through landmark initiatives such as the Bihar Film Conclave, the Corporation provides a dynamic platform for national and international filmmakers.",
        bsfdfc_para2:
          "By fostering a creative and supportive ecosystem, BSFDFC is redefining Bihar's cinematic identity — encouraging filmmakers to discover the state's untold narratives, while simultaneously empowering local talent and technicians.",
        vision_title: "Our Vision",
        vision_desc:
          "To transform Bihar into a prominent film destination, utilizing the power of cinema for cultural preservation and public awareness.",
        mission_title: "Our Mission",
        mission_desc:
          "To foster excellence in cinema, promote the diversity of Indian culture, and facilitate a hassle-free filmmaking experience in Bihar.",
        objectives_heading: "Key Objectives",
        obj_1: "Promote Bihar as a vibrant filmmaking hub",
        obj_2:
          "Strengthen regional cinema (Bhojpuri, Maithili, Magahi, Angika, Bajjika)",
        obj_3:
          "Streamline film permissions through a single-window clearance system",
        obj_4:
          "Encourage investment in film infrastructure and skill development",
        obj_5: "Facilitate a transparent and efficient subsidy framework",
        obj_6:
          "Promote Bihar's culture, heritage, traditions and Tourist places",
        subsidy_heading: "Subsidy Structure & Incentives",
        sub_feature_title: "Feature Films",
        sub_feature_desc:
          "Subsidy ranging from ₹2 crore to ₹4 crore based on shooting days (50% - 75%) and film category (1st, 2nd, or 3rd film).",
        sub_tv_title: "Television Serials / Shows",
        sub_tv_desc:
          "Subsidy up to ₹50 Lakhs for 45 days of shooting, or up to ₹1 crore for 90 days of shooting in Bihar.",
        sub_ott_title: "Web Series / OTT Content",
        sub_ott_desc:
          "Subsidy up to ₹2 crore (min 30 days/50%) or ₹3 crore (min 60 days/70%) of shooting in Bihar.",
        sub_infra_title: "Infrastructure Development",
        sub_infra_desc:
          "Subsidy up to ₹1.5 crore for Film Cities/Studios, and up to ₹1 crore for equipment/tech setups (25% of investment).",
        success_heading: "Implementation Success",
        success_desc:
          "Since the introduction of the Bihar Film Policy, several national and international filmmakers have chosen Bihar for its authentic landscapes.",
        regional_heading: "Regional Cinema Hub",
        regional_desc:
          "Bihar has become a hub for regional filmmaking, in most of the languages of Bihar and the films showing culture, heritage, traditions and beautiful tourist places are being shot across various districts, involving local talent and dialects.",
        documentary_heading: "Documentary Films",
        documentary_desc:
          "Documentary productions highlighting the state's art, culture, and development narrative inspiring filmmakers to explore Bihar's untold stories of its heritage, traditions and tourist places through a realistic lens.",
      },

      // ─── ContactUs / Footer ───
      contact: {
        about_heading: "About BSFDFC",
        about_text:
          "The Bihar State Film Development & Finance Corporation Ltd. (BSFDFC) promotes film culture and incentivizes regional cinema. Through landmark initiatives, it provides a dynamic platform for national and international filmmakers, redefining Bihar's cinematic identity.",
        quick_links: "Quick Links",
        documents: "Documents",
        contact_heading: "Contact",
        follow_us: "Follow us",
        get_location: "Get Location",
        link_home: "Home",
        link_about: "About Us",
        link_vr: "VR Experience",
        link_film_policy: "Film Policy",
        link_shooting_location: "Shooting Location",
        link_notification: "Notification",
        link_tender: "Tender",
        link_bihar_bioscope: "Bihar Bioscope",
        link_promotion_policy: "Promotion Policy",
      },

      // ─── Language Toggle ───
      lang: {
        en: "EN",
        hi: "हिंदी",
      },

      // ─── Navbar ───
      nav: {
        home: "Home",
        about_us: "About Us",
        bsfdfc_profile: "BSFDFC Profile",
        board_of_directors: "Board of Directors",
        org_structure: "Organization structure",
        contact_us: "Contact Us",
        gallery: "Gallery",
        vr: "VR",
        policy_forms: "Policy & Forms",
        film_policy: "Film Policy",
        producer_reg: "Producer Registration Form",
        op_guidelines: "Operational Guidelines",
        shooting_permission: "How to Apply for Shooting Permission",
        moa: "MOA",
        impact: "Impact",
        shooting_in_bihar: "Shooting in Bihar",
        scholarship: "Scholarship",
        shooting_location: "Shooting Location",
        documents: "Documents",
        notification: "Notification",
        tender: "Tender",
        bihar_bioscope: "Bihar Bioscope",
        goa_brochure: "Goa Film Brochure",
        promotion_policy: "Promotion Policy",
        register: "Register",
        login: "Login",
        main: "Main",
        vision: "Vision",
        mission: "Mission",
        team: "Team",
        cinema_ecosystem: "Cinema Ecosystem",
        production_assets: "Production Assets",
        local_artist: "Local Artist",
        local_technicians: "Local Technicians & Manpower",
      },
    },
  },

  hi: {
    translation: {
      // ─── VideoSection ───
      video: {
        overlay_1_title: "निर्देशक का कैनवास",
        overlay_1_desc:
          "कच्चे, प्रामाणिक स्थान जो आपकी कहानी में जान डालते हैं।",
        overlay_2_title: "विरासत और क्षितिज का मिलन",
        overlay_2_desc:
          "आपकी अगली उत्कृष्ट कृति के लिए प्राकृतिक अद्भुतता का एक खाली पन्ना।",
        overlay_3_title: "चलते रील। जीवंत परिदृश्य।",
        overlay_3_desc:
          "नदियों से राजमार्गों तक, बिहार एक निरंतर ट्रैकिंग शॉट के रूप में खुलता है।",
        overlay_4_title: "हर सड़क एक स्टोरीबोर्ड है",
        overlay_4_desc:
          "राजमार्ग, गाँव की पगडंडियाँ, धुंधली सुबहें — आपका अगला दृश्य यहाँ पहले से इंतज़ार कर रहा है।",
        overlay_5_title: "जहाँ नदी पहली पंक्ति लिखती है",
        overlay_5_desc:
          "शांत किनारे, मृदु प्रकाश, अंतहीन क्षितिज — आपके उद्घाटन फ्रेम के लिए एक प्राकृतिक सेट।",
        overlay_6_title: "बिहार की नदी लय",
        overlay_6_desc:
          "स्वच्छ जल, रेत और हँसी — वह बनावट जिस पर कैमरे ठहरना पसंद करते हैं।",
        overlay_7_title: "रोहतास का प्रतिबिम्ब",
        overlay_7_desc:
          "शांत जल, ऊबड़-खाबड़ पहाड़ियाँ — रोमांस से विद्रोह तक हर मिजाज का आईना।",
        overlay_8_title: "हर विधा के लिए एक फ्रेम",
        overlay_8_desc:
          "थ्रिलर, ड्रामा, डॉक्यू या स्वप्नलोक — यह नीला विस्तार आपकी कहानी के अनुसार ढलता है।",
        overlay_9_title: "पठार जो सेट जैसे लगते हैं",
        overlay_9_desc:
          "हवा, चट्टान, क्षितिज — न्यूनतम, शक्तिशाली और वाइड-एंगल कथा के लिए बने।",
        overlay_10_title: "बिहार की जड़ें। सिनेमा का पैमाना।",
        overlay_10_desc:
          "प्राचीन पठार और पन्ना पर्वतश्रेणियाँ जो हर फ्रेम को पोस्टर शॉट बना देती हैं।",
        overlay_11_title: "नए दृष्टिकोण खुलते हैं",
        overlay_11_desc:
          "ताज़ा कोण और अनदेखे कोने कैमरे में कैद होने का इंतज़ार कर रहे हैं।",
        overlay_12_title: "सिनेमाई क्षितिज",
        overlay_12_desc:
          "इन अद्भुत दृश्यों के साथ अपनी दृश्य शब्दावली का विस्तार करें।",
      },

      // ─── Vr ───
      vr: {
        heading: "बिहार फिल्म लोकेशन VR में",
        experience_prefix: "अनुभव करें",
        experience_suffix: "वर्चुअल रियलिटी (VR) में:",
        learn_more: "और जानें",
        title_1: "ग्लास ब्रिज, राजगीर",
        desc_1:
          "राजगीर के ग्लास ब्रिज पर एक अद्भुत वर्चुअल यात्रा पर निकलें, जो पहाड़ियों के बीच निलंबित एक चमत्कार है। यह वास्तुशिल्प उपलब्धि नीचे हरी-भरी घाटी और शांत परिदृश्य का मनोरम दृश्य प्रस्तुत करती है, जिससे बादलों के बीच चलने का अहसास होता है। रोमांच-प्रेमियों और प्रकृति प्रेमियों के लिए उपयुक्त, यह अनुभव राजगीर की प्राकृतिक सुंदरता की शांत भव्यता को ऊंचाई के रोमांच और आधुनिक इंजीनियरिंग के साथ जोड़ता है।",
        title_2: "घोड़ा कटोरा, राजगीर",
        desc_2:
          "घोड़ा कटोरा की शांतिपूर्ण आभा में डूब जाएँ, जो राजगीर की पहाड़ियों के बीच बसी एक प्राकृतिक घोड़े के आकार की झील है। हरे-भरे जंगलों से घिरी और अक्सर प्रवासी पक्षियों से सुशोभित, यह पवित्र और सुंदर जलाशय बिहार का एक छिपा हुआ रत्न है।",
        title_3: "जंगल सफारी प्रवेश, राजगीर",
        desc_3:
          "राजगीर की जंगल सफारी के द्वार से अपने साहसिक अभियान की शुरुआत करें, जहाँ जंगल आपका खुले बाहों से स्वागत करता है। यह VR अनुभव घने वन अभयारण्य में प्रवेश के उत्साह को कैद करता है।",
        title_4: "पावापुरी, नालंदा",
        desc_4:
          "नालंदा के पवित्र शहर पावापुरी में एक आध्यात्मिक गहरी यात्रा करें, जहाँ भगवान महावीर, 24वें जैन तीर्थंकर, ने निर्वाण प्राप्त किया। इस VR अनुभव में, जल मंदिर के हृदय तक वर्चुअल रूप से तैरें — कमल से भरी झील से घिरा एक संगमरमर का मंदिर।",
        title_5: "बापू टॉवर, पटना",
        desc_5:
          "पटना में बापू टॉवर की ऊंची संरचना के माध्यम से बिहार की क्रांतिकारी भावना को पुनः जीवित करें, जो बिहार में स्वतंत्रता आंदोलन पर महात्मा गांधी के प्रभाव को श्रद्धांजलि है।",
        title_6: "ह्वेनसांग स्मारक हॉल, नालंदा",
        desc_6:
          "नालंदा में ह्वेनसांग स्मारक हॉल के माध्यम से प्राचीन शिक्षा केंद्र में समय यात्रा करें। यह VR यात्रा प्रसिद्ध चीनी यात्री और विद्वान की कहानी बताती है जिसने नालंदा विश्वविद्यालय की शिक्षाओं को आत्मसात करने में वर्षों बिताए।",
      },

      // ─── FilmClub ───
      filmClub: {
        heading: "फिल्म क्लब",
        subtitle:
          "सिनेमा की कला को गहन अनुभवों और सार्थक बातचीत के माध्यम से खोजें, अन्वेषण करें और मनाएँ।",
        card_1_title: "कॉफी विद फिल्म",
        card_1_desc:
          "सिनेमाई चर्चाओं के माध्यम से युवाओं की कल्पना और रचनात्मकता कौशल में सुधार के लिए आलोचनात्मक सोच विकसित करें।",
        card_2_title: "सिने संवाद",
        card_2_desc:
          "इंटरैक्टिव सत्रों के माध्यम से बिहार के जीवंत फिल्म उद्योग और आकर्षक सामग्री का अन्वेषण करें।",
        card_3_title: "सिने गतिविधियाँ",
        card_3_desc:
          "प्रस्तुतियों, एम्बेडेड क्लिप और इंटरैक्टिव वर्कशीट के साथ विस्तृत फिल्म चर्चाओं में भाग लें।",
        explore_program: "कार्यक्रम देखें",
      },

      // ─── Actors ───
      actors: {
        heading: "बिहार की हस्तियाँ",
        dob_label: "जन्म तिथि:",
        district_label: "जिला:",
        dob_short: "जन्म तिथि",
        district_short: "जिला",
        about: "परिचय",
        view_profile: "प्रोफाइल देखें",
        p1_occ: "अभिनेता",
        p1_desc:
          "स्वतंत्र और व्यावसायिक फिल्मों में शक्तिशाली भूमिकाओं के लिए प्रसिद्ध।",
        p1_dist: "पश्चिम चंपारण",
        p2_occ: "अभिनेता",
        p2_desc:
          "अपनी बहुमुखी प्रतिभा और स्वाभाविक अभिनय शैली के लिए प्रसिद्ध।",
        p2_dist: "गोपालगंज",
        p3_occ: "निर्माता और अभिनेता",
        p3_desc:
          "राजनीतिक और सामाजिक-राजनीतिक फिल्मों के लिए प्रसिद्ध फिल्म निर्माता।",
        p3_dist: "बेतिया, पश्चिम चंपारण",
        p4_occ: "अभिनेता",
        p4_desc:
          "वरिष्ठ अभिनेता और राजनेता, 70-80 के दशक के सिनेमा में प्रतिष्ठित।",
        p4_dist: "पटना",
        p5_occ: "अभिनेता",
        p5_desc:
          "दिल छूने वाले अभिनय के लिए जाने जाने वाले प्रतिभाशाली अभिनेता।",
        p5_dist: "पटना",
        p6_occ: "अभिनेत्री",
        p6_desc: "फिल्मों और वेब सीरीज में उपस्थिति वाली अभिनेत्री और मॉडल।",
        p6_dist: "भागलपुर",
        p7_occ: "अभिनेत्री",
        p7_desc:
          "हिंदी, तमिल और तेलुगु सिनेमा में अपनी भूमिकाओं के लिए जानी जाने वाली भारतीय अभिनेत्री।",
        p7_dist: "पटना",
        p8_occ: "अभिनेता",
        p8_desc:
          "भेजा फ्राई और खोसला का घोसला में हास्य भूमिकाओं के लिए जाने जाने वाले अभिनेता।",
        p8_dist: "भोजपुर, बिहार",
        p9_occ: "फिल्म निर्देशक और लेखक",
        p9_desc:
          "अपने शानदार काम के लिए प्रसिद्ध भारतीय फिल्म निर्देशक, निर्माता और लेखक।",
        p9_dist: "जमशेदपुर (तब बिहार)",
        p10_occ: "अभिनेता",
        p10_desc: "हास्य अभिनय और मजबूत चरित्र भूमिकाओं के लिए प्रशंसित।",
        p10_dist: "दरभंगा",
        p11_occ: "उद्यमी, निर्माता, निर्देशक, अभिनेता",
        p11_desc:
          "TVF के संस्थापक, 'परमानेंट रूममेट्स' और 'पिचर्स' जैसी वेब सीरीज के लिए प्रसिद्ध।",
        p11_dist: "मुजफ्फरपुर",
        p12_occ: "अभिनेता",
        p12_desc:
          "पौराणिक और एक्शन भूमिकाओं के लिए लोकप्रिय टीवी और फिल्म अभिनेता।",
        p12_dist: "भागलपुर",
        p13_occ: "अभिनेता",
        p13_desc:
          "'पंचायत' में विकास शुक्ला की स्नेहपूर्ण, प्रामाणिक भूमिका के लिए जाने जाते हैं।",
        p13_dist: "महनार (वैशाली जिला)",
        p14_occ: "अभिनेता",
        p14_desc:
          "पंचायत में 'बिनोद' के रूप में दिल जीतने वाले बिहारी अभिनेता।",
        p14_dist: "दरवेशपुर, सीवान के पास",
        p15_occ: "अभिनेता, चित्रकार, लेखक, निर्देशक",
        p15_desc:
          "पंचायत में विधायक चंदू सिंह की यथार्थवादी भूमिका के लिए प्रशंसित अभिनेता।",
        p15_dist: "सहरसा",
        p16_occ: "अभिनेता",
        p16_desc: "पंचायत में भूषण की भूमिका के लिए जाने जाने वाले अभिनेता।",
        p16_dist: "दरभंगा, बिहार",
        p17_occ: "अभिनेता",
        p17_desc:
          "पंचायत में माधव की हास्य भूमिका के लिए जाने जाने वाले बिहारी अभिनेता।",
        p17_dist: "नवादा",
        p18_occ: "शहनाई माएस्ट्रो",
        p18_desc: "पौराणिक शहनाई वादक, भारत रत्न से सम्मानित।",
        p18_dist: "डुमराँव (बक्सर)",
        p19_occ: "लोक गायिका",
        p19_desc: "बिहार की लोक विरासत की आवाज, विशेषकर छठ के दौरान।",
        p19_dist: "समस्तीपुर",
        p20_occ: "लोक/शास्त्रीय गायिका",
        p20_desc:
          "भारतीय शास्त्रीय और लोक संगीत को बढ़ावा देने वाली युवा प्रतिभा।",
        p20_dist: "मधुबनी",
        p21_occ: "लोक गायिका",
        p21_desc:
          "भोजपुरी और क्षेत्रीय परंपराओं को पुनर्जीवित करने वाली लोक गायिका।",
        p21_dist: "पटना",
      },

      // ─── Cinemaecosystem ───
      ecosystem: {
        heading: "सिनेमा इकोसिस्टम",
        subtitle:
          "उस जीवंत इकोसिस्टम का अन्वेषण करें जो प्रॉप्स और प्रोडक्शन एसेट्स से लेकर स्थानीय कलाकारों और तकनीशियनों तक फिल्म निर्माण का समर्थन करता है। प्रत्येक तत्व प्रामाणिक सिनेमाई अनुभवों को आकार देने में महत्वपूर्ण भूमिका निभाता है।",
        card_1_title: "प्रोडक्शन एसेट्स",
        card_1_desc:
          "विविध सिनेमाई आवश्यकताओं के लिए तैयार प्रॉप्स और प्रोडक्शन उपकरणों की व्यापक सूची तक पहुँचें।",
        card_2_title: "स्थानीय कलाकार",
        card_2_desc:
          "अपने प्रोडक्शन में प्रामाणिक क्षेत्रीय स्वाद लाने के लिए प्रतिभाशाली स्थानीय अभिनेताओं, गायकों, संगीत और नृत्य कलाकारों के समूह से जुड़ें।",
        card_3_title: "स्थानीय तकनीशियन",
        card_3_desc:
          "पेशेवर सुरक्षा सेवाओं और ऑन-लोकेशन सुरक्षा प्रबंधन के साथ एक सुरक्षित फिल्मांकन वातावरण सुनिश्चित करें।",
      },

      // ─── GoverningBody ───
      governing: {
        heading: "प्रशासनिक संरचना",
        tab_board: "निदेशक मंडल",
        tab_management: "प्रबंधन",
        tab_nodal: "नोडल अधिकारी",
        tab_districts: "जिला कला एवं संस्कृति अधिकारी",
        // topImages
        top1_name: "श्री मिहिर कुमार सिंह, भा.प्र.से.",
        top1_title: "निदेशक सह अध्यक्ष, BSFDFC",
        top1_subtitle: "(विकास आयुक्त, बिहार सरकार)",
        top2_name: "श्री प्रणव कुमार, भा.प्र.से.",
        top2_title: "प्रबंध निदेशक, BSFDFC",
        top2_subtitle: "सचिव (कला और संस्कृति विभाग)",
        // boardMembers
        board1_name: "श्री मिहिर कुमार सिंह, भा.प्र.से.",
        board1_role:
          "विकास आयुक्त, बिहार सरकार एवं निदेशक सह अध्यक्ष, बिहार राज्य फिल्म विकास एवं वित्त निगम लिमिटेड",
        board2_name: "श्री प्रणव कुमार, भा.प्र.से.",
        board2_role:
          "सचिव, कला और संस्कृति विभाग, बिहार सरकार एवं प्रबंध निदेशक, बिहार राज्य फिल्म विकास एवं वित्त निगम लिमिटेड",
        board3_name: "श्री कुंदन कुमार, भा.प्र.से.",
        board3_role:
          "सचिव, उद्योग विभाग, बिहार सरकार एवं नामित निदेशक, बिहार राज्य फिल्म विकास एवं वित्त निगम लिमिटेड",
        board4_name: "श्री अनुपम कुमार, भा.प्र.से.",
        board4_role:
          "सचिव, सूचना एवं जनसंपर्क विभाग, बिहार सरकार एवं नामित निदेशक, बिहार राज्य फिल्म विकास एवं वित्त निगम लिमिटेड",
        board5_name: "श्री मुकेश कुमार लाल, IAAS",
        board5_role:
          "विशेष सचिव, वित्त विभाग, बिहार सरकार एवं नामित निदेशक, बिहार राज्य फिल्म विकास एवं वित्त निगम लिमिटेड",
        // bodyMembers
        body1_name: "श्रीमती रूबी, भा.प्र.से.",
        body1_role: "महाप्रबंधक, BSFDFC",
        body2_name: "श्री अरविंद रंजन दास",
        body2_role: "सलाहकार (फिल्म)",
        body3_name: "वी.डी. मिश्रा",
        body3_role: "सलाहकार (वित्त एवं लेखा)",
        body4_name: "सोनिका कुमारी",
        body4_role: "सहायक अनुभाग अधिकारी",
        body5_name: "कुमार गौरव",
        body5_role: "कनिष्ठ सलाहकार (संचार एवं नेटवर्किंग)",
        body6_name: "लीला कुमारी प्रसाद",
        body6_role: "डेटा एंट्री ऑपरेटर",
        body7_name: "अमित रंजन",
        body7_role: "डेटा एंट्री ऑपरेटर",
      },

      // ─── ContactPage ───
      contactPage: {
        heading: "संपर्क करें",
        subtitle:
          "हम बिहार में फिल्म शूटिंग, सब्सिडी और अनुमतियों से संबंधित किसी भी प्रश्न में आपकी सहायता के लिए यहाँ हैं। निम्नलिखित में से किसी भी माध्यम से हमसे संपर्क करें।",
        address_label: "कार्यालय का पता",
        address_line1: "बिहार राज्य फिल्म विकास एवं वित्त निगम लिमिटेड",
        address_line2: "विकास भवन, नया सचिवालय,",
        address_line3: "पटना - 800015, बिहार, भारत",
        phone_label: "फोन नंबर",
        email_label: "ईमेल पता",
      },

      // ─── FilmPolicy ───
      filmPolicy: {
        heading: "फिल्म नीति",
        subtitle:
          "बिहार के सिनेमाई भविष्य को शक्ति देने वाली नीतियों और सब्सिडी की खोज करें — वित्तीय प्रोत्साहन और प्रोडक्शन सहायता।",
        film_subsidy: "फिल्म सब्सिडी तालिका",
        investment_subsidy: "निवेश सब्सिडी तालिका",
        tv_serial_assistance:
          "राज्य में टीवी सीरियल/शो की शूटिंग के लिए वित्तीय सहायता",
        ott_assistance:
          "OTT प्लेटफॉर्म पर प्रदर्शित होने वाली वेब सीरीज़ के लिए वित्तीय सहायता",
        download_btn: "संपूर्ण बिहार नई फिल्म नीति डाउनलोड करें (PDF)",
        // FilmSubsidyTable
        fst_col_category: "फिल्म श्रेणी",
        fst_col_subsidy: "अनुदान / सब्सिडी",
        fst_col_criteria: "मानदंड",
        fst_film1: "पहली फिल्म",
        fst_film2: "दूसरी फिल्म",
        fst_film3: "तीसरी फिल्म",
        fst_1_sub1: "₹2 करोड़ तक या कुल फिल्म लागत का 25%, जो भी कम हो",
        fst_1_cri1: "राज्य में कुल शूटिंग दिनों का न्यूनतम 50%",
        fst_1_sub2: "₹2.50 करोड़ तक या कुल फिल्म लागत का 25%, जो भी कम हो",
        fst_1_cri2: "राज्य में कुल शूटिंग दिनों का न्यूनतम 75%",
        fst_2_sub1: "₹2.75 करोड़ तक या कुल फिल्म लागत का 25%, जो भी कम हो",
        fst_2_cri1: "राज्य में कुल शूटिंग दिनों का न्यूनतम 50%",
        fst_2_sub2: "₹3.00 करोड़ तक या कुल फिल्म लागत का 25%, जो भी कम हो",
        fst_2_cri2: "राज्य में कुल शूटिंग दिनों का न्यूनतम 75%",
        fst_3_sub1: "₹3.50 करोड़ तक या कुल फिल्म लागत का 25%, जो भी कम हो",
        fst_3_cri1: "राज्य में कुल शूटिंग दिनों का न्यूनतम 50%",
        fst_3_sub2: "₹4.00 करोड़ तक या कुल फिल्म लागत का 25%, जो भी कम हो",
        fst_3_cri2: "राज्य में कुल शूटिंग दिनों का न्यूनतम 75%",
        // InvestmentSubsidyTable
        ist_col_slno: "क्र.सं.",
        ist_col_scheme: "अनुदान योजना",
        ist_col_min_cost: "न्यूनतम परियोजना लागत (लाख में)",
        ist_col_max_incentive: "अधिकतम प्रोत्साहन (%)",
        ist_col_max_grant: "अधिकतम अनुदान सीमा (लाख में)",
        ist_purpose1:
          "फिल्म सेट / फिल्म सिटी / थीम पार्क / थीम विलेज, VFX, एनिमेशन, साउंड रिकॉर्डिंग / डबिंग, कलर करेक्शन के लिए फिल्म स्टूडियो जैसी अवसंरचना स्थापित करने हेतु।",
        ist_purpose2:
          "फिल्म प्रोडक्शन और प्रोसेसिंग के लिए फिल्म लाइटिंग, हाई रिज़ॉल्यूशन कैमरा, साउंड सिस्टम, डबिंग आदि हेतु।",
        ist_purpose3: "पूर्ण सुसज्जित स्टूडियो की स्थापना हेतु।",
        ist_purpose4:
          "एनिमेशन और कंप्यूटर ग्राफिक्स केंद्र तथा अन्य तकनीकी सुविधाओं की स्थापना हेतु।",
        // FilmSubsidy (TV serials)
        fs_col_slno: "क्र.सं.",
        fs_col_subsidy: "सब्सिडी (वित्तीय सहायता)",
        fs_col_criteria: "मानदंड",
        fs_sub1: "50 लाख तक या कुल प्रोडक्शन लागत (COP) का 25%, जो भी कम हो",
        fs_cri1: "राज्य के भीतर न्यूनतम 45 दिन की शूटिंग",
        fs_sub2: "1 करोड़ तक या कुल प्रोडक्शन लागत (COP) का 25%, जो भी कम हो",
        fs_cri2: "राज्य के भीतर न्यूनतम 90 दिन की शूटिंग",
        // OTTSubsidy
        ott_col_slno: "क्र.सं.",
        ott_col_subsidy: "सब्सिडी (वित्तीय सहायता)",
        ott_col_criteria: "मानदंड",
        ott_sub1: "2 करोड़ तक या प्रोडक्शन लागत (COP) का 25%",
        ott_cri1:
          "कुल शूटिंग दिनों का न्यूनतम 50% या राज्य में 30 दिन की शूटिंग",
        ott_sub2: "3 करोड़ तक या प्रोडक्शन लागत (COP) का 25%",
        ott_cri2:
          "कुल शूटिंग दिनों का न्यूनतम 70% या राज्य में 60 दिन की शूटिंग",
      },

      // ─── VR Page ───
      vrPage: {
        heading: "बिहार को वर्चुअल रियलिटी में देखें",
        subtitle:
          "हमारे क्यूरेटेड VR अनुभवों के माध्यम से बिहार की समृद्ध विरासत और मनमोहक परिदृश्यों में डूब जाएं।",
        vr_1: "ग्लास ब्रिज, राजगिर",
        vr_2: "पावापुरी जलमंदिर, नालंदा",
        vr_3: "जंगल सफारी, राजगिर",
        vr_4: "घोरा कटोरा, राजगिर",
        vr_5: "जरासंध का अखाड़ा, राजगिर",
        vr_6: "ह्वेन त्सांग स्मारक हॉल, नालंदा",
        vr_7: "सभ्यता द्वार, पटना",
        vr_8: "गोलघर, पटना",
        vr_9: "बुद्ध स्मृति पार्क, पटना",
        vr_10: "बापू टावर, पटना",
        vr_11: "शांतिवन, राजगिर",
        vr_12: "वेणुवन, राजगिर",
        vr_13: "रोपवे, राजगिर",
        vr_14: "प्राचीन नालंदा विश्वविद्यालय, राजगिर",
        vr_15: "नई नालंदा विश्वविद्यालय, राजगिर",
      },

      // ─── AboutUs Page ───
      aboutUs: {
        hero_title: "बिहार: भारतीय सिनेमा की उभरती शक्ति",
        hero_subtitle:
          "समृद्ध विरासत, प्रतिष्ठित किंवदंतियों और अनकही कहानियों की भूमि जो कैमरे में कैद होने की प्रतीक्षा कर रही है।",
        legends_heading: "बिहार की विभूतियाँ",
        legends_desc:
          "बिहार कुछ सबसे प्रतिष्ठित हस्तियों का घर रहा है जिन्होंने भारतीय फिल्म इतिहास को आकार दिया है।",
        bsfdfc_heading: "BSFDFC: बिहार की सिनेमाई विरासत का पोषण",
        bsfdfc_para1:
          "बिहार राज्य फिल्म विकास एवं वित्त निगम लि. (BSFDFC) फिल्म संस्कृति को बढ़ावा देकर और क्षेत्रीय सिनेमा को प्रोत्साहित करके इस विरासत को मजबूत करना जारी रखे हुए है। बिहार फिल्म कॉन्क्लेव जैसी ऐतिहासिक पहलों के माध्यम से, निगम राष्ट्रीय और अंतर्राष्ट्रीय फिल्म निर्माताओं के लिए एक गतिशील मंच प्रदान करता है।",
        bsfdfc_para2:
          "एक रचनात्मक और सहायक पारिस्थितिकी तंत्र को बढ़ावा देकर, BSFDFC बिहार की सिनेमाई पहचान को फिर से परिभाषित कर रहा है — फिल्म निर्माताओं को राज्य की अनकही कहानियों की खोज करने के लिए प्रोत्साहित करते हुए, साथ ही स्थानीय प्रतिभा और तकनीशियनों को सशक्त बना रहा है।",
        vision_title: "हमारी दृष्टि",
        vision_desc:
          "बिहार को एक प्रमुख फिल्म गंतव्य में बदलना, सांस्कृतिक संरक्षण और जन जागरूकता के लिए सिनेमा की शक्ति का उपयोग करना।",
        mission_title: "हमारा लक्ष्य",
        mission_desc:
          "सिनेमा में उत्कृष्टता को बढ़ावा देना, भारतीय संस्कृति की विविधता को प्रोत्साहित करना और बिहार में परेशानी मुक्त फिल्म निर्माण अनुभव को सुगम बनाना।",
        objectives_heading: "प्रमुख उद्देश्य",
        obj_1: "बिहार को एक जीवंत फिल्म निर्माण केंद्र के रूप में बढ़ावा देना",
        obj_2:
          "क्षेत्रीय सिनेमा (भोजपुरी, मैथिली, मगही, अंगिका, बज्जिका) को मजबूत करना",
        obj_3:
          "सिंगल-विंडो क्लीयरेंस सिस्टम के माध्यम से फिल्म अनुमतियों को सुव्यवस्थित करना",
        obj_4: "फिल्म अवसंरचना और कौशल विकास में निवेश को प्रोत्साहित करना",
        obj_5: "एक पारदर्शी और कुशल सब्सिडी ढांचे को सुगम बनाना",
        obj_6:
          "बिहार की संस्कृति, विरासत, परंपराओं और पर्यटन स्थलों को बढ़ावा देना",
        subsidy_heading: "सब्सिडी संरचना और प्रोत्साहन",
        sub_feature_title: "फीचर फिल्में",
        sub_feature_desc:
          "शूटिंग दिनों (50% - 75%) और फिल्म श्रेणी (पहली, दूसरी या तीसरी फिल्म) के आधार पर ₹2 करोड़ से ₹4 करोड़ तक की सब्सिडी।",
        sub_tv_title: "टेलीविजन सीरियल / शो",
        sub_tv_desc:
          "45 दिनों की शूटिंग के लिए ₹50 लाख तक, या बिहार में 90 दिनों की शूटिंग के लिए ₹1 करोड़ तक की सब्सिडी।",
        sub_ott_title: "वेब सीरीज / OTT कंटेंट",
        sub_ott_desc:
          "बिहार में शूटिंग के लिए ₹2 करोड़ तक (न्यूनतम 30 दिन/50%) या ₹3 करोड़ तक (न्यूनतम 60 दिन/70%) की सब्सिडी।",
        sub_infra_title: "अवसंरचना विकास",
        sub_infra_desc:
          "फिल्म सिटी/स्टूडियो के लिए ₹1.5 करोड़ तक और उपकरण/तकनीकी सेटअप के लिए ₹1 करोड़ तक की सब्सिडी (निवेश का 25%)।",
        success_heading: "कार्यान्वयन सफलता",
        success_desc:
          "बिहार फिल्म नीति की शुरुआत के बाद से, कई राष्ट्रीय और अंतर्राष्ट्रीय फिल्म निर्माताओं ने बिहार को इसके प्रामाणिक परिदृश्यों के लिए चुना है।",
        regional_heading: "क्षेत्रीय सिनेमा केंद्र",
        regional_desc:
          "बिहार क्षेत्रीय फिल्म निर्माण का केंद्र बन गया है, बिहार की अधिकांश भाषाओं में और संस्कृति, विरासत, परंपराओं और सुंदर पर्यटन स्थलों को दर्शाने वाली फिल्मों की विभिन्न जिलों में शूटिंग हो रही है, जिसमें स्थानीय प्रतिभा और बोलियों को शामिल किया जा रहा है।",
        documentary_heading: "वृत्तचित्र फिल्में",
        documentary_desc:
          "राज्य की कला, संस्कृति और विकास की कहानी को उजागर करने वाली वृत्तचित्र प्रोडक्शन, फिल्म निर्माताओं को बिहार की विरासत, परंपराओं और पर्यटन स्थलों की अनकही कहानियों को यथार्थवादी नजरिए से खोजने के लिए प्रेरित करती हैं।",
      },

      // ─── ContactUs / Footer ───
      contact: {
        about_heading: "BSFDFC के बारे में",
        about_text:
          "बिहार राज्य फिल्म विकास एवं वित्त निगम लिमिटेड (BSFDFC) फिल्म संस्कृति को बढ़ावा देता है और क्षेत्रीय सिनेमा को प्रोत्साहित करता है। ऐतिहासिक पहलों के माध्यम से, यह राष्ट्रीय और अंतर्राष्ट्रीय फिल्म निर्माताओं के लिए एक गतिशील मंच प्रदान करता है, बिहार की सिनेमाई पहचान को नया रूप देता है।",
        quick_links: "त्वरित लिंक",
        documents: "दस्तावेज़",
        contact_heading: "संपर्क",
        follow_us: "हमें फॉलो करें",
        get_location: "स्थान प्राप्त करें",
        link_home: "होम",
        link_about: "हमारे बारे में",
        link_vr: "VR अनुभव",
        link_film_policy: "फिल्म नीति",
        link_shooting_location: "शूटिंग लोकेशन",
        link_notification: "अधिसूचना",
        link_tender: "निविदा",
        link_bihar_bioscope: "बिहार बायोस्कोप",
        link_promotion_policy: "प्रोमोशन नीति",
      },

      // ─── Language Toggle ───
      lang: {
        en: "EN",
        hi: "हिंदी",
      },

      // ─── Navbar ───
      nav: {
        home: "होम",
        about_us: "हमारे बारे में",
        bsfdfc_profile: "BSFDFC प्रोफाइल",
        board_of_directors: "निदेशक मंडल",
        org_structure: "संगठन संरचना",
        contact_us: "संपर्क करें",
        gallery: "गैलरी",
        vr: "VR",
        policy_forms: "नीति एवं प्रपत्र",
        film_policy: "फिल्म नीति",
        producer_reg: "निर्माता पंजीकरण फॉर्म",
        op_guidelines: "परिचालन दिशानिर्देश",
        shooting_permission: "शूटिंग अनुमति के लिए आवेदन कैसे करें",
        moa: "MOA",
        impact: "प्रभाव",
        shooting_in_bihar: "बिहार में शूटिंग",
        scholarship: "छात्रवृत्ति",
        shooting_location: "शूटिंग लोकेशन",
        documents: "दस्तावेज़",
        notification: "अधिसूचना",
        tender: "निविदा",
        bihar_bioscope: "बिहार बायोस्कोप",
        goa_brochure: "गोवा फिल्म ब्रोशर",
        promotion_policy: "प्रोमोशन नीति",
        register: "पंजीकरण",
        login: "लॉगिन",
        main: "मुख्य",
        vision: "दृष्टिकोण",
        mission: "लक्ष्य",
        team: "टीम",
        cinema_ecosystem: "सिनेमा इकोसिस्टम",
        production_assets: "प्रोडक्शन एसेट्स",
        local_artist: "स्थानीय कलाकार",
        local_technicians: "स्थानीय तकनीशियन एवं जनशक्ति",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

// Set the html lang attribute on init and on language change
document.documentElement.lang = i18n.language;
i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;
