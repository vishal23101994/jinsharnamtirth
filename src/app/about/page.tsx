"use client";

import { motion } from "framer-motion";
import DonationSection from "../../components/DonationSection";

/* ---------------- HERO ---------------- */

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">

      {/* BACKGROUND IMAGE WITH SLOW ZOOM */}

      <motion.img
        src="/images/tirth/61.jpeg"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}

      <div className="absolute inset-0 bg-black/60" />

      {/* GOLDEN LIGHT OVERLAY */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="
        absolute inset-0
        bg-[radial-gradient(circle_at_center,rgba(255,200,120,0.35),transparent_60%)]
        "
      />

      {/* CONTENT */}

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative text-center px-6 max-w-5xl"
      >

        {/* TITLE */}

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="
          text-5xl md:text-7xl lg:text-6xl
          font-serif
          text-amber-100
          drop-shadow-[0_15px_40px_rgba(0,0,0,0.9)]
          tracking-wide
          mb-8
          leading-tight
          "
        >
          About <br/>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-yellow-300"
          >
            Jinsharnam Tirth Dham
          </motion.span>

        </motion.h1>

        {/* SUBTITLE */}

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="
          text-md md:text-xl
          text-amber-200
          leading-relaxed
          font-serif
          drop-shadow
          max-w-3xl mx-auto
          "
        >
          A sacred sanctuary of peace, devotion and spiritual awakening
          guided by the divine inspiration of
          <span className="text-yellow-300 font-semibold">
            {" "}Acharya Shri Pulak Sagar Ji Maharaj
          </span>
        </motion.p>

      </motion.div>

      {/* SCROLL INDICATOR */}

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-amber-200 text-xl"
      >
        ↓
      </motion.div>

    </section>
  );
}

/* ---------------- INTRO ---------------- */

function IntroSection() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-serif mb-8 text-[#4B1E00]">
          Jinsharnam Tirth
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
        Jinsharnam Tirth is a sacred sanctuary where spirituality,
        peace and devotion come together. It is a place where the
        mind finds stillness and the soul discovers its true path.

        Under the divine inspiration of
        <strong> Acharya Shri Pulak Sagar Ji Maharaj</strong>,
        this tirth has become a spiritual center for seekers who
        wish to experience meditation, wisdom, and the eternal
        values of Jain philosophy.
        </p>

      </div>

    </section>
  );
}

/* ---------------- ROSHANI ---------------- */

function RoshaniSection() {
  return (
    <section className="relative py-28 
    bg-gradient-to-b 
    from-[#FFF8E7] 
    via-[#FFFDF6] 
    to-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="float-left w-full md:w-[800px] mr-8 mb-6">

        <motion.img
        src="/images/tirth/2.jpeg"
        initial={{ opacity: 0, y: 80, scale:0.95 }}
        whileInView={{ opacity: 1, y:0, scale:1 }}
        viewport={{ once:true }}
        transition={{ duration:1 }}
        className="
        w-full
        rounded-2xl
        border border-amber-300
        shadow-[0_25px_70px_rgba(0,0,0,0.2)]
        hover:scale-[1.03]
        transition-all duration-700
        object-cover"
        />

        <p className="
        text-center
        mt-3
        text-sm
        italic
        text-amber-800
        font-[var(--font-hindi)]
        ">
        "रोशनी में नहाया जिनशरणं"
        </p>

        </div>


        {/* TEXT */}
        <h2 className="text-4xl md:text-5xl
                    font-[var(--font-hindi)]
                    text-[#7a1c1c]
                    tracking-wide mb-4">
          कौन हूँ मैं?
        </h2>

        <p className="text-lg md:text-xl
                      text-gray-700
                      leading-relaxed
                      tracking-wide
                      text-justify
                      font-[var(--font-hindi)]">
          रोशनी में नहाया जिनशरणं...
        </p>

        <br/>

        <p className="text-lg text-gray-700 leading-loose text-justify">
          मैं जिनशरणं हूँ, सुकून और शांति का अद्भूत संगम हूँ। मुझ से भवसागर तिरने का रास्ता मिलता है। 
          मेरी माटी का जो स्पर्श करता है, अनायास ही बर्हियात्री अंर्तयात्री हो जाता है। वह आत्मान्वेषी हो जाता है। 
          प्राकृतिक सौंदर्य की बात करो तो मेरे चारों तरफ दूर दूर तक हरियाली ही हरियाली है। 
          और वर्षाकाल में तो मेरी छटा ही निराली हो जाती है। लोग मुझमें अल्प विश्राम करने आते हैं 
          और चिरंतन ठहराव ढूंढने लगते है, जो भी मेरे दर तक आता है, वह जिनशरणं गच्छामि कहता है 
          और मेरी अनुभूति करके जिनशरणं पव्वज्जामि में पहुँच जाता है, क्योंकि मैं जिनशरणं हूँ।
        </p>

        {/* CLEAR FLOAT */}
        <div className="clear-both"></div>

      </div>

    </section>

  );
}



/* ---------------- ASHIRVAD ---------------- */

function AshirvadSection() {
  return (
    <section className="relative py-28 
    bg-gradient-to-b 
    from-[#FFF8E7] 
    via-[#FFFDF6] 
    to-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="float-right w-full md:w-[400px] ml-8 mb-6">

        <motion.img
        src="/images/tirth/80.jpg"
        initial={{ opacity: 0, y: 80, scale:0.95 }}
        whileInView={{ opacity: 1, y:0, scale:1 }}
        viewport={{ once:true }}
        transition={{ duration:1 }}
        className="
        w-full
        rounded-2xl
        border border-amber-300
        shadow-[0_25px_70px_rgba(0,0,0,0.2)]
        hover:scale-[1.03]
        transition-all duration-700
        object-cover"
        />

        <p className="
        text-center
        mt-3
        text-sm
        italic
        text-amber-800
        font-[var(--font-hindi)]
        ">
        "पुष्पगिरी प्रणेता गणाधिपति गणाचार्यश्री पुष्पदंत सागरजी गुरूदेव"
        </p>

        </div>
        

        {/* TEXT */}
        <h2 className="text-4xl font-serif text-[#7a1c1c] mb-4">
          मंगल आशीर्वाद
        </h2>

        <p className="text-lg text-gray-700 leading-loose text-justify">
          असीम प्रेम,
        </p>

        <br/>

        <p className="text-lg text-gray-700 leading-loose text-justify">
          मुनि पुलक सागर जी को मंगल आशीर्वाद। भव्य तीर्थ के सृजन की भावना सुनकर आनंदित हैं। 
          परोक्ष रुप से समाचार मिल रहे थे। सुनकर मन प्रसन्न था और है। साधु-संस्कृति और धर्म का 
          संवाहक होता है तुम्हारे अन्दर वह क्षमता विद्यमान है। मेरा हार्दिक मंगलाशीष है। 
          तुम्हारी भावना सफल हो और सूरत-मुम्बई राष्ट्रीय राजमार्ग पर जहां श्वेताम्बर संस्कृति अपनी ध्वजा फहरा रही है, 
          तुम भी दिगम्बरत्व की स्थापना-प्रभावना की ध्वजा फहराओ और तुम्हारे इस अद्भुत तीर्थ की चर्चा जनमानस में हो। 
          यही सोच कर दूध तुम्हारे शक्कर भरे हाथों में सौंप रहा हूँ।
        </p>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          मंगलाशीव पुष्पदन्त <br />
        </p>

        {/* CLEAR FLOAT */}
        <div className="clear-both"></div>

      </div>

    </section>
  );
}

/* ---------------- AKINCHANYA ---------------- */

function AkinchanyaSection() {
  return (
    <section className="relative py-28 
    bg-gradient-to-b 
    from-[#FFF8E7] 
    via-[#FFFDF6] 
    to-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="float-left w-full md:w-[400px] mr-8 mb-6">

        <motion.img
        src="/images/maharaj/pulak-sagar.jpeg"
        initial={{ opacity: 0, y: 80, scale:0.95 }}
        whileInView={{ opacity: 1, y:0, scale:1 }}
        viewport={{ once:true }}
        transition={{ duration:1 }}
        className="
        w-full
        rounded-2xl
        border border-amber-300
        shadow-[0_25px_70px_rgba(0,0,0,0.2)]
        hover:scale-[1.03]
        transition-all duration-700
        object-cover"
        />

        <p className="
        text-center
        mt-3
        text-sm
        italic
        text-amber-800
        font-[var(--font-hindi)]
        ">
        "भारत गौरव परम पूज्य <br/>मनोज्ञाचार्यश्री पुलक सागरजी गुरूदेव "
        </p>

        </div>
        

        {/* TEXT */}
        <p className="text-lg text-gray-700 leading-loose text-justify">
          मैं घर बना रहा हूँ किसी और के लिए, खुद को मिटा रहा हूँ किसी और के लिए मैंने तो कांटो में गुजारी है जिंदगी, 
          पत्थर हटा रहा हूँ किसी और के लिए...
        </p>
        <br/>
        <h2 className="text-4xl font-serif text-[#7a1c1c] mb-4">
          मैं अकिंचन्य ही हूँ
        </h2>

        <p className="text-lg text-gray-700 leading-loose text-justify">
          मेरा अंतःस्थल हमेशा ही निर्माण और विस्तार के विपक्ष में रहा है। मैं खुद समझ नहीं पा रहा हूँ कि इसे हालात कहूँ, 
          मन की विवशता कहूँ, या अतिधर्मानुराग कहूँ, या फिर नियति का फैसला ही मान लूँ। बहुत टाला, बहुत बचने का प्रयास 
          किया फिर भी नियति ने मुझे अपने पक्ष में कर ही लिया। अब मुझे ऐसा लगता है जैसे मैं कुछ नहीं कर रहा हूँ नियति ही 
          मुझसे सब कुछ करा रही है।
        </p>

        <br/>

        <p className="text-lg text-gray-700 leading-loose text-justify">
          आशीर्वाद मेरे पूज्य गुरुदेव आचार्यश्री पुष्पदंत सागरजी महाराज का है। भूमि, पानी, पत्थर, वृक्ष ये सब तो प्रकृति प्रदत्त है। 
          ईट, मिट्टी, सीमेंट सब मानवी अविष्कार है। धन धनपतियों का है, दानियों का है। आकार इंजीनियरों का मस्तिष्क है। 
          श्रम श्रमिको का है और समर्पण जिनभक्तों का है। ये सब बिखरे हुये थे, प्रकृति ने मुझे इनका संकलन व संयोजन 
          करने के लिए निमित्त बनाया। मेरे आराध्य श्री पार्श्वनाथ भगवान ने मुझ नाचीज़ को इतने बड़े सौभाग्य में आगे किया और सृजन हो गया 
          मुझ अकिंचन्य से जिनशरणं तीर्थ का।
        </p>
        <br/>
        {/* CLEAR FLOAT */}
        <div className="clear-both"></div>

      </div>

    </section>
  );
}

/* ---------------- ADINATH ---------------- */

function AdinathSection() {
  return (
    <section className="relative py-28 
    bg-gradient-to-b 
    from-[#FFF8E7] 
    via-[#FFFDF6] 
    to-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="float-right w-full md:w-[400px] ml-8 mb-6">

        <motion.img
        src="/images/tirth/1.jpeg"
        initial={{ opacity: 0, y: 80, scale:0.95 }}
        whileInView={{ opacity: 1, y:0, scale:1 }}
        viewport={{ once:true }}
        transition={{ duration:1 }}
        className="
        w-full
        rounded-2xl
        border border-amber-300
        shadow-[0_25px_70px_rgba(0,0,0,0.2)]
        hover:scale-[1.03]
        transition-all duration-700
        object-cover"
        />

        </div>

        {/* TEXT */}
        <h2 className="text-4xl font-serif text-[#7a1c1c] mb-4">
          भूगर्भ प्रकट, अतिशयकारी भगवान आदिनाथ स्वामी
        </h2>

        <p className="text-lg text-gray-700 leading-loose text-justify">
          मध्य प्रदेश के आष्टा नगर में एक मुस्लिम परिवार के गृह नींव खनन के समय प्रकट हुए कृपासिन्धु प्रथम तीर्थंकर श्री आदिनाथ (ऋषभदेव) भगवान। 
          जिनकी यह मनोहारी वीतराग दिगम्बर जिन प्रतिमा है। <br/>इनके दर्शन मात्र से मनोकामनाएँ स्वतः पूर्ण हाने लगती है। 
          इन्हीं की पावन निश्रा आशीर्वाद से तीर्थंधाम जिनशरणं का सृजन सहजता से सम्पन्न हो सका।
        </p>

        <p className="text-lg text-gray-700 leading-loose text-justify">
          "बाबा के दर पर आने तक, लोग बहुत मजबूर होते हैं। बाबा के दर पर आकर, लोग कुछ और होते है।"
        </p>

        {/* CLEAR FLOAT */}
        <div className="clear-both"></div>

      </div>

    </section>
  );
}

/* ---------------- MULNAYAK ---------------- */

function MulnayakSection() {
  return (
    <section className="relative py-28 
    bg-gradient-to-b 
    from-[#FFF8E7] 
    via-[#FFFDF6] 
    to-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="float-left w-full md:w-[400px] mr-8 mb-6">

        <motion.img
        src="/images/tirth/12.1.jpeg"
        initial={{ opacity: 0, y: 80, scale:0.95 }}
        whileInView={{ opacity: 1, y:0, scale:1 }}
        viewport={{ once:true }}
        transition={{ duration:1 }}
        className="
        w-full
        rounded-2xl
        border border-amber-300
        shadow-[0_25px_70px_rgba(0,0,0,0.2)]
        hover:scale-[1.03]
        transition-all duration-700
        object-cover"
        />

        <p className="
        text-center
        mt-3
        text-sm
        italic
        text-amber-800
        font-[var(--font-hindi)]
        ">
        "मूलनायक तीर्थाधिपति कल्पतरू पार्श्वनाथ भगवान"
        </p>

        </div>

        {/* TEXT */}
        <h2 className="text-4xl font-serif text-[#7a1c1c] mb-4">
          मूलनायक तीर्थाधिपति कल्पतरू पार्श्वनाथ भगवान 
        </h2>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          कौन हूँ मैं?  
        </p>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          मैं आचार्यश्री पुलक सागरजी गुरुदेव जी के मानस पटल पर उभरी हुई कल्पनाओं का समस्त जिनभक्तों के लिए एक 
          अकल्पनीय जिनवैभव युक्त अष्टधातु से निर्मित 13 फीट अवगाहना लिए वीतराग भगवान पार्श्वनाथ की एक जिनप्रतिमा हूँ। 
          वीतरागता और वैभव कितना विरोधाभास है मुझमें, पर अतिशयोक्ति नहीं जिन्होंने मेरे इस स्वरूप को जाना है, समझा है, 
          उनके लिए विरोधाभास नहीं, साक्षात अरंहत का आभास है मुझमें, मेरे इस स्वरूप का दर्शन सिर्फ जिनशरणं में ही हो सकता है। 
          मेरे सन्निधिकरण में तुम्हें ऐसा नहीं लगेगा की मैं तुम्हारी दुनियां में हूँ। बल्कि तुम्हें लगेगा कि तुम मेरी दुनियां में आ गये हो। हकीकत 
          में मैं अमूर्त हूँ, फिर भी मुझे मूर्त रुप में उतारा गया है और तीर्थाधिपति जिनशरणं कल्पतरु पार्श्वनाथ के नाम से मुझे पुकारा गया है।
        </p>

        {/* CLEAR FLOAT */}
        <div className="clear-both"></div>

      </div>

    </section>
  );
}

/* ---------------- MUKTA ---------------- */

function MuktaSection() {
  return (
    <section className="relative py-28 
    bg-gradient-to-b 
    from-[#FFF8E7] 
    via-[#FFFDF6] 
    to-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="float-right w-full md:w-[500px] ml-8 mb-6">

        <motion.img
        src="/images/tirth/5.jpeg"
        initial={{ opacity: 0, y: 80, scale:0.95 }}
        whileInView={{ opacity: 1, y:0, scale:1 }}
        viewport={{ once:true }}
        transition={{ duration:1 }}
        className="
        w-full
        rounded-2xl
        border border-amber-300
        shadow-[0_25px_70px_rgba(0,0,0,0.2)]
        hover:scale-[1.03]
        transition-all duration-700
        object-cover"
        />

        <p className="
        text-center
        mt-3
        text-sm
        italic
        text-amber-800
        font-[var(--font-hindi)]
        ">
        " मुक्ताकाश त्रिमूर्ति "
        </p>
        </div>

        {/* TEXT */}
        <h2 className="text-4xl font-serif text-[#7a1c1c] mb-4">
          मुक्ताकाश त्रिमूर्ति
        </h2>

        <p className="text-lg text-gray-700 leading-loose text-justify">
          जिनशरणं के मुक्ताकाश में त्रिमूर्ति भगवान विराजित है भगवान आदिनाथ, शातिनाथ भगवान और महावीर स्वामी 
          भगवान की परिकर 21 फीट अवगाहना से सुशोभित है, दक्षिण भारत उत्तर भारत शिल्प कला के अदभुत समागम दिव्य दर्शन यहाँ होते है। 
          जहां समय-समय पर वार्षिक उत्सव, पंच वर्षीय उत्सव एवं बारह वर्षीय महोत्सव एवं महामस्तकाभिषेक के कार्यक्रम समर्पित होते है।
        </p>

        <br/>

        <p className="text-lg text-gray-700 leading-loose text-justify">
          जिनशरणं में हर रोज जैन धर्म को एक उत्सव की तरह मनाया जाता है।
        </p>

        {/* CLEAR FLOAT */}
        <div className="clear-both"></div>

      </div>

    </section>
  );
}

/* ---------------- MUKHRIT ---------------- */

function MukhritSection() {
  return (
    <section className="relative py-28 
    bg-gradient-to-b 
    from-[#FFF8E7] 
    via-[#FFFDF6] 
    to-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="float-left w-full md:w-[500px] mr-8 mb-6">

        <motion.img
        src="/images/tirth/3.jpeg"
        initial={{ opacity: 0, y: 80, scale:0.95 }}
        whileInView={{ opacity: 1, y:0, scale:1 }}
        viewport={{ once:true }}
        transition={{ duration:1 }}
        className="
        w-full
        rounded-2xl
        border border-amber-300
        shadow-[0_25px_70px_rgba(0,0,0,0.2)]
        hover:scale-[1.03]
        transition-all duration-700
        object-cover"
        />

        <p className="
        text-center
        mt-3
        text-sm
        italic
        text-amber-800
        font-[var(--font-hindi)]
        ">
        " शोभाताई रसिकलालजी धारीवाल प्रवेशद्वारे "
        </p>
        </div>

        {/* TEXT */}
        <h2 className="text-4xl font-serif text-[#7a1c1c] mb-6">
          मुखरित भूखंड
        </h2>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          कौन था मैं?
        </p>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          एक ऐसा भूखंड, मुझमें सावन तो था, पर मैं पावन नहीं था, मैं निर्जर तो था, पर मुझमें निर्जरा नहीं थीं। मैं भीगता था, 
          पर धुलता नहीं था। धुलता भी कैसे, क्योंकि मेरे पास किसी तपस्वी के कमंडल का जल, किसी तीर्थंकर के गंधोदक का जल जो नहीं था। 
          जब-जब कोई व्यापारी मुझमें कोई कारखाना बनाना चाहता या कोई भवन निर्माता मुझमें नगर बसाना चाहता या कोई धनपति मुझमें होटल या 
          रिसोर्ट बनाना चाहता, तो मुझे भूखंड होने पर एक अभिशाप की अनुभूति होती। सदियों से मेरी मन स्थिति यही थी मुझमें भौतिकता नहीं, भगवान बसे। 
          शायद मेरे भाग्य में भी यही लिखा था तभी तो पूज्य गुरुदेव की दृष्टि मुझ पर पड़ी और मेरा वर्षो पुराना सपना एक खूबसूरत हकीकत में बदल गया। 
          मेरे ख्वाबों को आकाश मिला, मेरे हौसलों को पंख मिले, तप गुरुदेव ने किया फल मुझे मिला। जिस जिनकी (जिनेन्द्र की) शरण में जाने को लोग जन्मों 
          तपस्या करते है, पूज्य गुरुदेव ने मुझे बड़ी सरलता एवं सहजता से उन जिन तक पहुँचा दिया और मुझ भूखंड को जिनशरणं बना दिया।
        </p>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          आप सोच रहे होंगे कि मैं इतने सालों से चुप बैठा, आज इतना कैसे बोल रहा हूँ वह इसलिए कि गुरुदेव ने अपने कदम मुझ पर रखकर मुझ बेजुबान को जुबान दे दी।
        </p>

        {/* CLEAR FLOAT */}
        <div className="clear-both"></div>

      </div>

    </section>
  );
}

/* ---------------- VARDANI ---------------- */

function VardaniSection() {
  return (
    <section className="relative py-28 
    bg-gradient-to-b 
    from-[#FFF8E7] 
    via-[#FFFDF6] 
    to-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="float-right w-full md:w-[600px] ml-8 mb-2">

        <motion.img
        src="/images/tirth/8.jpeg"
        initial={{ opacity: 0, y: 80, scale:0.95 }}
        whileInView={{ opacity: 1, y:0, scale:1 }}
        viewport={{ once:true }}
        transition={{ duration:1 }}
        className="
        w-full
        rounded-2xl
        border border-amber-300
        shadow-[0_25px_70px_rgba(0,0,0,0.2)]
        hover:scale-[1.03]
        transition-all duration-700
        object-cover"
        />

        <p className="
        text-center
        mt-6
        text-sm
        italic
        text-amber-800
        font-[var(--font-hindi)]
        ">
        " वरदानी नैसर्गिक कल्पवृक्ष "
        </p>
        </div>

        {/* TEXT */}
        <h2 className="text-4xl font-serif text-[#7a1c1c] mb-4">
          वरदानी नैसर्गिक कल्पवृक्ष
        </h2>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          कौन कहता है?
        </p>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          सपने साकार नहीं होते, जिन जननी के तो सोलह स्वप्न साकार होते हैं। मैं भी एक सपना बनकर नींद में नहीं बल्कि गुरुदेव के ध्यान में एक बार नहीं, 
          कई बार आया हूँ और मैंने उनका ध्यान अपनी ओर आकर्षित कराया है। जब गुरुदेव आँख बंद करते, तो मैं दृश्यमान हो जाता, आँखे खोलते ओझल हो 
          जाता पर स्मृतियों में बना रहता। मेरी स्मृतियाँ मुझे तलाशने के लिए उन्हें मजबूर करतीं और मैं भी सत्य को जानते हूए उनका इंतजार करता। तलाश और 
          इंतजार का यह सिलसिला जारी रहा। भारत वसुंधरा के लगभग सात राज्यों की दूरियों को नंगे बदन और नंगे पांव से नापते हुए ये संत आखिरकार मुझ तक 
          पहुँच ही गया। महाराष्ट्र और गुजरात के संधिस्थल पर विगत 800 वर्षों से भगवान पार्श्वनाथ का वरदान लिये मैं यहां खडा हूँ। मुझे जरुरत थी एक सिद्ध 
          पुरुष की जो मुझे सिद्ध कर सके और मेरी सिद्धियां जगत को बाँट सके। जो भी जिनभक्त मेरे पास आयेगा, मैं उन्हें कल्पतरु पार्श्वनाथ से मिलवा सकूंगा। 
          भक्तों को भगवान से मिलवाना ही मेरी अंतहीन तपस्या है। मैं कल्पवृक्ष हूँ, मुझे पाकर ही लोग मुझे जान सकते है। इतिहास मुझे देववृक्ष, सुरतरू, 
          कल्पवृक्ष, कल्पद्रुम, कल्पलता के नाम से जानता है।
        </p>
        {/* CLEAR FLOAT */}
        <div className="clear-both"></div>

      </div>

    </section>
  );
}

/* ---------------- SWARNIM ---------------- */

function SwarnimSection() {
  return (
    <section className="relative py-28 
    bg-gradient-to-b 
    from-[#FFF8E7] 
    via-[#FFFDF6] 
    to-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="float-left w-full md:w-[600px] mr-8 mb-2">

        <motion.img
        src="/images/tirth/6.jpeg"
        initial={{ opacity: 0, y: 80, scale:0.95 }}
        whileInView={{ opacity: 1, y:0, scale:1 }}
        viewport={{ once:true }}
        transition={{ duration:1 }}
        className="
        w-full
        rounded-2xl
        border border-amber-300
        shadow-[0_25px_70px_rgba(0,0,0,0.2)]
        hover:scale-[1.03]
        transition-all duration-700
        object-cover"
        />

        <p className="
        text-center
        mt-6
        text-sm
        italic
        text-amber-800
        font-[var(--font-hindi)]
        ">
        "स्वर्णिम गजरथ जिनालय "
        </p>
        </div>

        {/* TEXT */}
        <h2 className="text-4xl font-serif text-[#7a1c1c] mb-4">
          स्वर्णिम गजरथ जिनालय
        </h2>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          कौन हूँ मैं?
        </p>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          मैं मंदिर हूं, देवालय हूँ, जिनालय हूँ, देरासर हूँ, कोईल हूँ, क्षेत्रम् हूँ, जिसने मुझे जिस नाम से पुकारा, मैं वही हूँ। पर इससे भी बड़ी बात मेरे लिये 
          है, कि मैं आचार्य श्री पुलकसागरजी गुरुदेव के स्वर्णिम स्वप्नों का स्वर्णिम गजरथ जिनालय हूँ। जमीन से उठाकर गुरुदेव ने मुझे 108 फीट 
          उत्तुंग मुक्त आकाश प्रदान किया।
        </p>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          मेरी लहराती ध्वजाएं, मुझ पर चढ़े हुए स्वर्ण कलश, मेरे आनंद की हिलोरे मुझे मंदिर में विराजमान मूलनायक तीर्थाधिपति जिनशरणं 
          कल्पतरु पारर्श्वनाथ जैसे परमानंद के स्रोत से जोड़ती है। जब हवायें मुझे छूती है, वे ही धन्य नहीं होती है, मुझे छूकर वे जिस - जिस को छूती है, 
          उन्हें भी धन्यता प्रदान करती है। स्वर्ग से उतरे हुए दो ऐरावत हाथी उस समय मेरे गौरव को बढ़ा देते हैं। जब स्वयं सौधर्म इंद्र सारथी बनकर मेरे 
          प्रभू का रथ चलाते हुए सुशोभित होते है। रोज सुबह सूर्य मेरी आरती उतारता हैं, चांद तारे मेरी परिक्रमा लगाते, 
          कल्पवृक्ष की शीतल छाया मेरा आवास है, तो भक्तों की भरी हुई झोलियाँ मेरा वरदान है क्योंकि मेरे मालिक पार्श्वनाथ भगवान है।
        </p>
        {/* CLEAR FLOAT */}
        <div className="clear-both"></div>

      </div>

    </section>
  );
}

/* ---------------- MAANSTAMBH ---------------- */

function MaanstambhSection() {
  return (
    <section className="relative py-28 
    bg-gradient-to-b 
    from-[#FFF8E7] 
    via-[#FFFDF6] 
    to-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="float-right w-full md:w-[600px] ml-8 mb-2">

        <motion.img
        src="/images/tirth/7.jpeg"
        initial={{ opacity: 0, y: 80, scale:0.95 }}
        whileInView={{ opacity: 1, y:0, scale:1 }}
        viewport={{ once:true }}
        transition={{ duration:1 }}
        className="
        w-full
        rounded-2xl
        border border-amber-300
        shadow-[0_25px_70px_rgba(0,0,0,0.2)]
        hover:scale-[1.03]
        transition-all duration-700
        object-cover"
        />

        <p className="
        text-center
        mt-6
        text-sm
        italic
        text-amber-800
        font-[var(--font-hindi)]
        ">
        "जिनसहस्त्रनाम 24 मानस्तंभ "
        </p>
        </div>

        {/* TEXT */}
        <h2 className="text-4xl font-serif text-[#7a1c1c] mb-4">
          जिनसहस्त्रनाम 24 मानस्तंभ
        </h2>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          कौन है हम?
        </p>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          हम है तीर्थाधिपति जिनशरण कल्पतरु पार्श्वनाथ के 1008 नामों के स्वरुप का एक स्थान पर दिव्यदर्शन कराने वाले 24 मानस्तंभ। 
          अभी तक हम सहस्रनाम स्तोत्र बनकर किताबों में बंद थे। हमारा स्थान मंदिरों की अलमारियां थी। कभी कभार कोई भक्त हमें पढ़ लेता, 
          पर जिनशरणं तीर्थ में भगवान के सहस्रनाम उजागर हो गये है। यहां हमें पढ़ा ही नहीं जाता, हमारे दर्शन भी किये जाते है। हमे जिया भी जाता है। 
          हमारे मंत्र जाप भी होते है। सहस्रनाम का पाठ भी होता है, उपवास विधान आदि करके कर्मों की निर्जरा भी होती है। यदि चर्म चक्षुओं से 
          भगवान के 1008 रुपों के दर्शन करना हो तो जिनशरण के सहस्रनाम मानस्तंभ में प्रत्यक्ष दर्शन हो सकते है। यह अद्भूत कल्पना विश्व की 
          अनूठी धरोहर के रूप में सृजित है।
        </p>
        
        {/* CLEAR FLOAT */}
        <div className="clear-both"></div>

      </div>

    </section>
  );
}

/* ---------------- DHYANMANDIR ---------------- */

function DhyanmandirSection() {
  return (
    <section className="relative py-28 
    bg-gradient-to-b 
    from-[#FFF8E7] 
    via-[#FFFDF6] 
    to-white">

      <div className="max-w-6xl mx-auto px-6">


        <div className="float-left w-full md:w-[500px] mr-8 mb-2">

        <motion.img
        src="/images/tirth/14.jpeg"
        initial={{ opacity: 0, y: 80, scale:0.95 }}
        whileInView={{ opacity: 1, y:0, scale:1 }}
        viewport={{ once:true }}
        transition={{ duration:1 }}
        className="
        w-full
        rounded-2xl
        border border-amber-300
        shadow-[0_25px_70px_rgba(0,0,0,0.2)]
        hover:scale-[1.03]
        transition-all duration-700
        object-cover"
        />

        <p className="
        text-center
        mt-6
        text-sm
        italic
        text-amber-800
        font-[var(--font-hindi)]
        ">
        "ध्यान मंदिर "
        </p>
        </div>

        {/* TEXT */}
        <h2 className="text-4xl font-serif text-[#7a1c1c] mb-4">
          ध्यान मंदिर
        </h2>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          कौन हूं मैं?
        </p>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          मैं 'ध्यान मंदिर' हूँ, मैं आचार्यश्री पुलक सागरजी गुरुदेव के ध्यान में मेरा जन्म हुआ है।
        </p>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          भागती हुई दुनिया का ठहराव हूँ मैं, करोड़ों की भीड़ का एकांत हूँ मैं, भटके हुए लोगों की दिशा हूँ मैं!
        </p>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          गुरुदेव के कई वर्षों की तपस्या का फल हूँ मैं, और जो 'ध्यान' में लीन हो जाए उसके लिए आने वाला कल हूँ मैं!
        </p>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          यहाँ प्रार्थना नहीं, 'ध्यान' होता है! प्रार्थना वो होती है जब आप भगवान से कुछ कहते हैं, लेकिन 'ध्यान' तब होता है, जब भगवान आपसे कुछ कहते है।
        </p>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          दुनिया तो शब्द सुनती है, 'ध्यान मदिर' खामोशी भी सुन लेता है!
        </p>

        {/* CLEAR FLOAT */}
        <div className="clear-both"></div>

      </div>

    </section>
  );
}

/* ---------------- NAVGRAH ---------------- */

function NavgrahSection() {
  return (
    <section className="relative py-28 
    bg-gradient-to-b 
    from-[#FFF8E7] 
    via-[#FFFDF6] 
    to-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="float-right w-full md:w-[600px] ml-8 mb-2">

        <motion.img
        src="/images/tirth/9.jpeg"
        initial={{ opacity: 0, y: 80, scale:0.95 }}
        whileInView={{ opacity: 1, y:0, scale:1 }}
        viewport={{ once:true }}
        transition={{ duration:1 }}
        className="
        w-full
        rounded-2xl
        border border-amber-300
        shadow-[0_25px_70px_rgba(0,0,0,0.2)]
        hover:scale-[1.03]
        transition-all duration-700
        object-cover"
        />

        <p className="
        text-center
        mt-6
        text-sm
        italic
        text-amber-800
        font-[var(--font-hindi)]
        ">
        "नवग्रहशान्ति जिनालय "
        </p>
        </div>

        {/* TEXT */}
        <h2 className="text-4xl font-serif text-[#7a1c1c] mb-4">
          नवग्रहशान्ति जिनालय
        </h2>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          कौन हूँ मैं?
        </p>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          जिनशरणं का नवग्रहशाति जिनालय। ग्रह प्रकृति को प्रभावित करते है। मानव जीवन में भी उथल पुथल ग्रहों से आती है, जब कोई मानव 
          उन ग्रहों के स्वरूप को जानकर उन ग्रहों के प्रभाव को समझकर, उन ग्रहों के अधिष्ठाता देवाधिदेव तीर्थकरों की शरण में चला जाता है, 
          तब दुष्ट से दुष्ट ग्रह भी उसके जीवन में वरदान बन जाते है। तीर्थकरों की पूजा, विधान, भक्ति, मंत्र जाप, हवन, यज्ञ, मानव के अंतःस्थल 
          को पवित्र बनाते है, और उसके समस्त पापों को पुण्य में बदल देते हैं।
        </p>
        {/* CLEAR FLOAT */}
        <div className="clear-both"></div>

      </div>

    </section>
  );
}

/* ---------------- NIRJARA ---------------- */

function NirjaraSection() {
  return (
    <section className="relative py-28 
    bg-gradient-to-b 
    from-[#FFF8E7] 
    via-[#FFFDF6] 
    to-white">

      <div className="max-w-6xl mx-auto px-6">


        <div className="float-left w-full md:w-[500px] mr-8 mb-2">

        <motion.img
        src="/images/tirth/10.jpeg"
        initial={{ opacity: 0, y: 80, scale:0.95 }}
        whileInView={{ opacity: 1, y:0, scale:1 }}
        viewport={{ once:true }}
        transition={{ duration:1 }}
        className="
        w-full
        rounded-2xl
        border border-amber-300
        shadow-[0_25px_70px_rgba(0,0,0,0.2)]
        hover:scale-[1.03]
        transition-all duration-700
        object-cover"
        />

        <p className="
        text-center
        mt-6
        text-s
        italic
        text-amber-800
        font-[var(--font-hindi)]
        ">
        "निर्जरा कुटीर (गुरु भवन) "
        </p>
        </div>

        {/* TEXT */}
        <h2 className="text-4xl font-serif text-[#7a1c1c] mb-4">
          निर्जरा कुटीर (गुरु भवन)
        </h2>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          कौन हूँ मैं?
        </p>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          मैं निर्जरा कुटीर हूँ, पुराने कर्मों को बहाकर, मोक्ष मार्ग की ओर ले जाने वाली साधना स्थली। निर्जरा कुटीर जहाँ 
          'गुरु भगवंत' प्रवास करते हैं, साधना करते हैं।
        </p>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          मेरा निर्माण आधुनिकता और पुरातन सभ्यता का बेजोड़ संगम है। यहाँ समता, वन्दना, स्तुति, स्वाध्याय, प्रतिक्रमण कायोत्सर्ग रहते है।
        </p>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          'जिनशरणं' की निर्जरा कुटीर 'कर्म' से 'धर्म' की ओर ले जाने वाली और फिर 'धर्म' की तपस्या करके 'मोक्ष' तक ले जाने वाली कुटीर है।
        </p>
        <br/><br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          * यह पूज्य गुरुदेव की साधना स्थली है।<br/>
          * इस कुटीर को वास्तु शिल्प द्वारा पाषाण से निर्मित किया है।<br/>
          * इसमें पूज्य गुरुदेव का स्वाध्याय कक्ष / विश्राम कक्ष / धर्म सभा कक्ष मौजूद है।
        </p>

        {/* CLEAR FLOAT */}
        <div className="clear-both"></div>

      </div>

    </section>
  );
}

/* ---------------- AHAAR ---------------- */

function AhaarSection() {
  return (
    <section className="relative py-28 
    bg-gradient-to-b 
    from-[#FFF8E7] 
    via-[#FFFDF6] 
    to-white">

      <div className="max-w-6xl mx-auto px-6">


        <div className="float-right w-full md:w-[400px] ml-8 mb-2">

        <motion.img
        src="/images/tirth/17.jpeg"
        initial={{ opacity: 0, y: 80, scale:0.95 }}
        whileInView={{ opacity: 1, y:0, scale:1 }}
        viewport={{ once:true }}
        transition={{ duration:1 }}
        className="
        w-full
        rounded-2xl
        border border-amber-300
        shadow-[0_25px_70px_rgba(0,0,0,0.2)]
        hover:scale-[1.03]
        transition-all duration-700
        object-cover"
        />

        <p className="
        text-center
        mt-6
        text-sm
        italic
        text-amber-800
        font-[var(--font-hindi)]
        ">
        "आहार कक्ष (राजा श्रेयांस महल) "
        </p>
        </div>

        {/* TEXT */}
        <h2 className="text-4xl font-serif text-[#7a1c1c] mb-4">
          आहार कक्ष (राजा श्रेयांस महल)
        </h2>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          मैं दान तीर्थ राजा श्रेयांस की स्मृति हूँ। मैं अक्षय दानशाला हूँ। नवधा भक्ति के स्वरों का गूजित आत्म संगीत हूँ। 
          मैं और मेरा रोम-रोम नमोस्तु-नमोस्तु कहकर अपने गुरुओं का पड़गाहन करता है। गुरु पूजन, वंदन, नमन, आहार कराकर 
          मैं महल के मंदिर जैसा महान हो जाता हूँ।
        </p>
        {/* CLEAR FLOAT */}
        <div className="clear-both"></div>

      </div>

    </section>
  );
}

/* ---------------- DEVMATI ---------------- */

function DevmatiSection() {
  return (
    <section className="relative py-28 
    bg-gradient-to-b 
    from-[#FFF8E7] 
    via-[#FFFDF6] 
    to-white">

      <div className="max-w-6xl mx-auto px-6">


        <div className="float-left w-full md:w-[600px] mr-8 mb-2">

        <motion.img
        src="/images/tirth/20.jpeg"
        initial={{ opacity: 0, y: 80, scale:0.95 }}
        whileInView={{ opacity: 1, y:0, scale:1 }}
        viewport={{ once:true }}
        transition={{ duration:1 }}
        className="
        w-full
        rounded-2xl
        border border-amber-300
        shadow-[0_25px_70px_rgba(0,0,0,0.2)]
        hover:scale-[1.03]
        transition-all duration-700
        object-cover"
        />

        <p className="
        text-center
        mt-6
        text-sm
        italic
        text-amber-800
        font-[var(--font-hindi)]
        ">
        "आर्यिका माँ देवमति उपाश्रय "
        </p>
        </div>

        {/* TEXT */}
        <h2 className="text-4xl font-serif text-[#7a1c1c] mb-4">
          आर्यिका माँ देवमति उपाश्रय
        </h2>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          संत कभी निवास नहीं करते, वे तो प्रवास करते है। हकीकत में उनका निवास तो सिद्धालय है। जब तक सिद्धालय ना मिले, 
          तब तक वे लंबी दूरी की थकान मिटाने को अल्प प्रवास कर, अपने मोक्ष मार्ग को प्रशस्त करते है। जिसके लिए वो घरों में नहीं, 
          उपाश्रयों में रहते हैं। यह साधु संतों की उपाश्रय स्थली, साधना स्थली और समाधि स्थली है। जो दादी माँ आर्यिका देवमति के 
          माता जी के नाम को समर्पित है।
        </p>
        {/* CLEAR FLOAT */}
        <div className="clear-both"></div>

      </div>

    </section>
  );
}

/* ---------------- GUFA ---------------- */

function GufaSection() {
  return (
    <section className="relative py-28 
    bg-gradient-to-b 
    from-[#FFF8E7] 
    via-[#FFFDF6] 
    to-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="float-right w-full md:w-[400px] ml-8 mb-2">

        <motion.img
        src="/images/tirth/15.jpeg"
        initial={{ opacity: 0, y: 80, scale:0.95 }}
        whileInView={{ opacity: 1, y:0, scale:1 }}
        viewport={{ once:true }}
        transition={{ duration:1 }}
        className="
        w-full
        rounded-2xl
        border border-amber-300
        shadow-[0_25px_70px_rgba(0,0,0,0.2)]
        hover:scale-[1.03]
        transition-all duration-700
        object-cover"
        />

        <p className="
        text-center
        mt-6
        text-sm
        italic
        text-amber-800
        font-[var(--font-hindi)]
        ">
        "सामायिक गुफा "
        </p>
        </div>

        {/* TEXT */}
        <h2 className="text-4xl font-serif text-[#7a1c1c] mb-4">
          सामायिक गुफा
        </h2>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          कौन हूँ मैं?
        </p>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          जिनशरणं के कोने में सबसे छुपी हुई एकांत में सामायिक गुफा के रूप में मेरा एक अस्तित्व है, मुझे एकांत पसंद है। मेरे आसपास का जो 
          वातावरण है, वह तपस्वियों के तपोवन जैसा है। दुनियाँ की भीड़ में रहकर भी अकेले रहने का अनुभव मेरे पास है। जब कोई आत्मपिपासु 
          नयन मूंदकर मेरे आगोश में आता है तो वह आत्मस्थ होने लगता है। और मेरे आनंद में डूब कर परमानंद को पा लेता है।
        </p>
        {/* CLEAR FLOAT */}
        <div className="clear-both"></div>

      </div>

    </section>
  );
}

/* ---------------- TIRTH ---------------- */

function TirthSection() {
  return (
    <section className="relative py-28 
    bg-gradient-to-b 
    from-[#FFF8E7] 
    via-[#FFFDF6] 
    to-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="float-left w-full md:w-[600px] mr-8 mb-2">

        <motion.img
        src="/images/tirth/18.jpeg"
        initial={{ opacity: 0, y: 80, scale:0.95 }}
        whileInView={{ opacity: 1, y:0, scale:1 }}
        viewport={{ once:true }}
        transition={{ duration:1 }}
        className="
        w-full
        rounded-2xl
        border border-amber-300
        shadow-[0_25px_70px_rgba(0,0,0,0.2)]
        hover:scale-[1.03]
        transition-all duration-700
        object-cover"
        />

        <p className="
        text-center
        mt-6
        text-sm
        italic
        text-amber-800
        font-[var(--font-hindi)]
        ">
        "आचार्य पुष्पदंत निलय "
        </p>
        </div>

        {/* TEXT */}
        <h2 className="text-4xl font-serif text-[#7a1c1c] mb-4">
          आचार्य पुष्पदंत निलय
        </h2>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          'जिनशरणं तीर्थ' तीर्थंकर, साधु संत और भक्तों की एक ऐसी त्रिवेणी है जहां भगवान की कृपा भी बहती है, साधु संत का आशीर्वाद 
          भी बहता है और भक्तों की असीम भक्ति भी बहती है। यहां बच्चे धर्म समझते हैं बड़े धर्म में लीन हो जाते हैं और बुजुर्ग 'जिन' की 
          शरण में खुद को समर्पित कर देते हैं। इसलिए मोक्षयात्री से लेकर तीर्थयात्री तक, हर किसी की सुविधा का यहां विशेष ध्यान रखा गया है।
        </p>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          जिनशरणं में एक अतिथि निवास है, एक ऐसा अतिथि निवास जिसकी व्यवस्था का लाभनहीं रह जाता, बल्कि हमेशा के लिए उसका मन यही का हो जाता है!
        </p>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          लेकर एक अतिथि खुद अतिथि
        </p>
        {/* CLEAR FLOAT */}
        <div className="clear-both"></div>

      </div>

    </section>
  );
}

/* ---------------- MATOSHRI ---------------- */

function MatoshriSection() {
  return (
    <section className="relative py-28 
    bg-gradient-to-b 
    from-[#FFF8E7] 
    via-[#FFFDF6] 
    to-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="float-right w-full md:w-[300px] ml-8 mb-2">

        <motion.img
        src="/images/tirth/19.jpeg"
        initial={{ opacity: 0, y: 80, scale:0.95 }}
        whileInView={{ opacity: 1, y:0, scale:1 }}
        viewport={{ once:true }}
        transition={{ duration:1 }}
        className="
        w-full
        rounded-2xl
        border border-amber-300
        shadow-[0_25px_70px_rgba(0,0,0,0.2)]
        hover:scale-[1.03]
        transition-all duration-700
        object-cover"
        />

        <p className="
        text-center
        mt-6
        text-sm
        italic
        text-amber-800
        font-[var(--font-hindi)]
        ">
        "मातोश्री समाधि मंदिर "
        </p>
        </div>

        {/* TEXT */}
        <h2 className="text-4xl font-serif text-[#7a1c1c] mb-4">
          मातोश्री समाधि मंदिर
        </h2>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          कौन था मैं?
        </p>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          एक ऐसी माँ, जिसने अपनी जीवन में कई उतार चढाव देखे, लेकिन एक दिन वह परम सौभाग्यशाली हो गई, जब उसने संत 
          जैसी आत्मा को जन्म दिया। जिस माँ ने अपने बेटे को गुरु बनाया, उस गुरु ने अपनी माँ को वृति बनाकर मंदिर जैसा पूज्य बनाया। 
          आज भी उस मंदिर में (समाधि मंदिर में) अम्मा की आस्था की ज्योत जलती है। उस ज्योति में एक रोशनी है, जो रिश्तों के रास्तों को 
          रोशन करती है। कन्यादान तो हर माँ करती है, पर धर्म के लिए अपने पुत्र का दान करने वाली एक माँ का सौभाग्य स्थान है समाधि मंदिर।
        </p>
        {/* CLEAR FLOAT */}
        <div className="clear-both"></div>

      </div>

    </section>
  );
}

/* ---------------- SABHAGAR ---------------- */

function SabhagarSection() {
  return (
    <section className="relative py-28 
    bg-gradient-to-b 
    from-[#FFF8E7] 
    via-[#FFFDF6] 
    to-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="float-left w-full md:w-[600px] mr-8 mb-2">

        <motion.img
        src="/images/tirth/23.jpeg"
        initial={{ opacity: 0, y: 80, scale:0.95 }}
        whileInView={{ opacity: 1, y:0, scale:1 }}
        viewport={{ once:true }}
        transition={{ duration:1 }}
        className="
        w-full
        rounded-2xl
        border border-amber-300
        shadow-[0_25px_70px_rgba(0,0,0,0.2)]
        hover:scale-[1.03]
        transition-all duration-700
        object-cover"
        />

        <p className="
        text-center
        mt-6
        text-sm
        italic
        text-amber-800
        font-[var(--font-hindi)]
        ">
        "सम्बोधि सभागार "
        </p>
        </div>

        {/* TEXT */}
        <h2 className="text-4xl font-serif text-[#7a1c1c] mb-4">
          सम्बोधि सभागार
        </h2>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          'जिनशरणं' में एक खूबसूरत 'प्रवचन हॉल' का निर्माण भी किया गया है जहां एक वक्त में 500 लोग बैठकर साधु संत के प्रवचन का लाभलेकर खुद के जीवन को साकार कर सकते हैं!
        </p>
        {/* CLEAR FLOAT */}
        <div className="clear-both"></div>

      </div>

    </section>
  );
}

/* ---------------- PRABHU PRASAD ---------------- */

function PrasadSection() {
  return (
    <section className="relative py-28 
    bg-gradient-to-b 
    from-[#FFF8E7] 
    via-[#FFFDF6] 
    to-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="float-right w-full md:w-[600px] ml-8 mb-2">

        <motion.img
        src="/images/tirth/21.jpeg"
        initial={{ opacity: 0, y: 80, scale:0.95 }}
        whileInView={{ opacity: 1, y:0, scale:1 }}
        viewport={{ once:true }}
        transition={{ duration:1 }}
        className="
        w-full
        rounded-2xl
        border border-amber-300
        shadow-[0_25px_70px_rgba(0,0,0,0.2)]
        hover:scale-[1.03]
        transition-all duration-700
        object-cover"
        />

        <p className="
        text-center
        mt-6
        text-sm
        italic
        text-amber-800
        font-[var(--font-hindi)]
        ">
        "प्रभु प्रसाद "
        </p>
        </div>

        {/* TEXT */}
        <h2 className="text-4xl font-serif text-[#7a1c1c] mb-4">
          प्रभु प्रसाद
        </h2>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          'जिन' की शरण में आने वाले अतिथि के लिए उच्च व्यवस्था की गई है, यहां स्वरुचि भोजनालय है जहां प्रसाद रूपी उत्तम भोजन 
          जैन नियमों के अनुरूप मिलता है और 300 से 400 लोग एक साथ बैठकर प्रभु प्रसाद ग्रहण करते है।
        </p>
        {/* CLEAR FLOAT */}
        <div className="clear-both"></div>

      </div>

    </section>
  );
}

/* ---------------- PULAK NILAY ---------------- */

function NilaySection() {
  return (
    <section className="relative py-28 
    bg-gradient-to-b 
    from-[#FFF8E7] 
    via-[#FFFDF6] 
    to-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="float-left w-full md:w-[600px] mr-8 mb-2">

        <motion.img
        src="/images/tirth/22.jpeg"
        initial={{ opacity: 0, y: 80, scale:0.95 }}
        whileInView={{ opacity: 1, y:0, scale:1 }}
        viewport={{ once:true }}
        transition={{ duration:1 }}
        className="
        w-full
        rounded-2xl
        border border-amber-300
        shadow-[0_25px_70px_rgba(0,0,0,0.2)]
        hover:scale-[1.03]
        transition-all duration-700
        object-cover"
        />

        <p className="
        text-center
        mt-6
        text-sm
        italic
        text-amber-800
        font-[var(--font-hindi)]
        ">
        "पुलक निलय "
        </p>
        </div>

        {/* TEXT */}
        <h2 className="text-4xl font-serif text-[#7a1c1c] mb-4">
          पुलक निलय
        </h2>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          यह भव्य इमारत यात्री निवास है। इसमें वातानुकुलित कक्ष, भोजनशाला, विशाल प्रवचन हॉल, उत्सव भवन एवं लिफ्ट सुविधा युक्त है।
        </p>
        {/* CLEAR FLOAT */}
        <div className="clear-both"></div>

      </div>

    </section>
  );
}

/* ---------------- CHATRAVAS ---------------- */

function ChatravasSection() {
  return (
    <section className="relative py-28 
    bg-gradient-to-b 
    from-[#FFF8E7] 
    via-[#FFFDF6] 
    to-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="float-right w-full md:w-[400px] ml-8 mb-2">

        <motion.img
        src="/images/tirth/26.jpeg"
        initial={{ opacity: 0, y: 80, scale:0.95 }}
        whileInView={{ opacity: 1, y:0, scale:1 }}
        viewport={{ once:true }}
        transition={{ duration:1 }}
        className="
        w-full
        rounded-2xl
        border border-amber-300
        shadow-[0_25px_70px_rgba(0,0,0,0.2)]
        hover:scale-[1.03]
        transition-all duration-700
        object-cover"
        />

        <p className="
        text-center
        mt-6
        text-sm
        italic
        text-amber-800
        font-[var(--font-hindi)]
        ">
        "जिनशरणं छात्रावास "
        </p>
        </div>

        {/* TEXT */}
        <h2 className="text-4xl font-serif text-[#7a1c1c] mb-4">
          जिनशरणं छात्रावास
        </h2>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          कौन हूं मैं?
        </p>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          मैं 'जिनशरणम का छात्रावास हूँ, यूं तो एक विद्यालय भी हूँ, 'लाइफ लॉग एक्सपीरियंस' हूँ, संस्कार की ओर बढ़ा अपना 'सबसे पहला कदम' हूँ।
        </p>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          बच्चों में जैन संस्कारों का पौधारोपण करना, शास्त्र के ज्ञान से जैन आचरण की जड़े मजबूत करना और उसमें शिक्षा के साथ-साथ धर्म के फल 
          भी ऊगाना मेरा लक्ष्य हैं।
        </p>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          तीर्थंकरों की आराधना से प्रभात सुप्रभात होती है। दिन को सही दिशा मिलती है, जलाभिषेक करके बच्चें अपनी सोच को गंधोदक की तरह पवित्र करते हैं। 
          संध्या वंदन के समय जिनराज की आरती और स्वाध्याय से शाम सजती है। जैन समाज का भविष्य यहाँ गढ़ा जाता है।
        </p>
        {/* CLEAR FLOAT */}
        <div className="clear-both"></div>

      </div>

    </section>
  );
}

/* ---------------- GAUSHALA ---------------- */

function GaushalaSection() {
  return (
    <section className="relative py-28 
    bg-gradient-to-b 
    from-[#FFF8E7] 
    via-[#FFFDF6] 
    to-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="float-left w-full md:w-[500px] mr-8 mb-2">

        <motion.img
        src="/images/tirth/24.jpeg"
        initial={{ opacity: 0, y: 80, scale:0.95 }}
        whileInView={{ opacity: 1, y:0, scale:1 }}
        viewport={{ once:true }}
        transition={{ duration:1 }}
        className="
        w-full
        rounded-2xl
        border border-amber-300
        shadow-[0_25px_70px_rgba(0,0,0,0.2)]
        hover:scale-[1.03]
        transition-all duration-700
        object-cover"
        />

        <p className="
        text-center
        mt-6
        text-sm
        italic
        text-amber-800
        font-[var(--font-hindi)]
        ">
        "गौशाला "
        </p>
        </div>

        {/* TEXT */}
        <h2 className="text-4xl font-serif text-[#7a1c1c] mb-4">
          गौशाला
        </h2>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          यह जीवन दायिनी, पंचामृत प्रदाय, पंचगव्य दाता, कामधेनु स्वरूप गौ माता का निवास स्थान है।
        </p>
        {/* CLEAR FLOAT */}
        <div className="clear-both"></div>

      </div>

    </section>
  );
}

/* ---------------- UTSAV BHAVAN ---------------- */

function BhavanSection() {
  return (
    <section className="relative py-28 
    bg-gradient-to-b 
    from-[#FFF8E7] 
    via-[#FFFDF6] 
    to-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="float-left w-full md:w-[500px] mr-8 mb-2">

        <motion.img
        src="/images/tirth/25.jpeg"
        initial={{ opacity: 0, y: 80, scale:0.95 }}
        whileInView={{ opacity: 1, y:0, scale:1 }}
        viewport={{ once:true }}
        transition={{ duration:1 }}
        className="
        w-full
        rounded-2xl
        border border-amber-300
        shadow-[0_25px_70px_rgba(0,0,0,0.2)]
        hover:scale-[1.03]
        transition-all duration-700
        object-cover"
        />

        <p className="
        text-center
        mt-6
        text-sm
        italic
        text-amber-800
        font-[var(--font-hindi)]
        ">
        "उत्सव भवन (पार्टी हाल) "
        </p>
        </div>

        {/* TEXT */}
        <h2 className="text-4xl font-serif text-[#7a1c1c] mb-4">
          उत्सव भवन (पार्टी हाल)
        </h2>
        <br/>
        <p className="text-lg text-gray-700 leading-loose text-justify">
          कॉफ्रेंस, जन्मदिन, वैवाहिक वर्षगांठ, हल्दी मेंहदी आदि कार्यक्रमों के लिए यहाँ सुसज्जित व्यवस्था है।
        </p>
        {/* CLEAR FLOAT */}
        <div className="clear-both"></div>

      </div>

    </section>
  );
}

/* ---------------- QUOTE ---------------- */

function QuoteSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#FFF8E7] to-white text-center">

      <motion.div
      initial={{ opacity:0, scale:0.9 }}
      whileInView={{ opacity:1, scale:1 }}
      transition={{ duration:1 }}
      className="max-w-3xl mx-auto px-8 py-16 rounded-3xl
      bg-white shadow-[0_20px_60px_rgba(0,0,0,0.1)]
      border border-amber-200"
      >

      <p className="text-2xl md:text-2xl 
      font-[var(--font-hindi)]
      text-[#4B1E00] leading-relaxed">

      “जब आत्मा अपने भीतर की शांति को पहचान लेती है,
      तब संसार का हर मार्ग मोक्ष की ओर ले जाता है।”

      </p>

      </motion.div>

    </section>
  );
}

/* ---------------- PAGE ---------------- */

export default function About() {
  return (
    <main>

      <HeroSection />
      <IntroSection />
      <RoshaniSection />
      <AshirvadSection />
      <AkinchanyaSection />
      <AdinathSection />
      <MulnayakSection/>
      <MuktaSection/>
      <MukhritSection/>
      <VardaniSection/>
      <SwarnimSection/>
      <MaanstambhSection/>
      <DhyanmandirSection/>
      <NavgrahSection/>
      <NirjaraSection/>
      <AhaarSection/>
      <DevmatiSection/>
      <GufaSection/>
      <TirthSection/>
      <MatoshriSection/>
      <SabhagarSection/>
      <PrasadSection/>
      <NilaySection/>
      <ChatravasSection/>
      <GaushalaSection/>
      <BhavanSection/>
      <QuoteSection />
      <DonationSection />

    </main>
  );
}