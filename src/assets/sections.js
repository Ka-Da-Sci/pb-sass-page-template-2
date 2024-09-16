const sections = [
  {
    title: "header",
    html: `    <section
      id="header"
      class="animate-[header-anim_0.9s_linear] bg-[linear-gradient(0deg,_#FFFFFF,_#FFFFFF)] [animation-fill-mode:forwards] fixed z-10 inset-x-0"
    >
      <div
        class="header container mx-auto flex flex-row gap-10 items-center justify-between sm:justify-around h-[76px] px-[5%] py-0"
      >
        <a href="./index.html" class="logo-brand-name flex items-center">
          <img
            class="w-5 h-[14.15px] sm:w-[35px] sm:h-[24.77px]"
            src="./assets/images/logo-without-name.svg"
            alt="logo"
          />
          <span
            class="font-['Space_Grotesk'] text-sm sm:text-lg font-bold leading-normal text-left text-[rgba(0,_0,_0,_1)] hover:text-[rgb(152,165,133)] hover:[transition:all_0.5s_ease-in-out]"
            >Logo</span
          >
        </a>
        <nav class="flex gap-5 flex-col sm:flex-row items-center justify-between w-[45%] sm:w-full fixed sm:static top-14 -right-[100px] bottom-0 bg-[rgba(18,20,29,1)] sm:bg-transparent min-w-[130px] max-w-[300px] sm:max-w-full pl-5 pr-5 py-5 sm:p-0 h-[250px] sm:h-full opacity-0 sm:opacity-100 translate-x-[200px] sm:translate-x-0 [transition:opacity_1s_ease,_transform_1s_ease]">
          <ul
            class="nav-ul flex gap-4 flex-col sm:flex-row items-center justify-between [list-style:none] ml-auto mr-auto sm:mr-0"
          >
            <li class="w-max">
              <a
                class="no-underline text-[rgba(255,_255,_255,_1)] sm:text-[rgba(0,0,0,1)] font-[Mulish] antialiased text-xs sm:text-sm font-bold leading-normal text-left hover:text-[rgb(152,165,133)] hover:[transition:all_0.5s_ease-in-out]"
                href="./index.html"
                >Home</a
              >
            </li>
            <li class="w-max">
              <a
                class="no-underline text-[rgba(255,_255,_255,_1)] sm:text-[rgba(0,0,0,1)] font-[Mulish] antialiased text-xs sm:text-sm font-bold leading-normal text-left hover:text-[rgb(152,165,133)] hover:[transition:all_0.5s_ease-in-out]"
                href="./index.html#about-us"
                >About Us</a
              >
            </li>
            <li class="w-max">
              <a
                class="no-underline text-[rgba(255,_255,_255,_1)] sm:text-[rgba(0,0,0,1)] font-[Mulish] antialiased text-xs sm:text-sm font-bold leading-normal text-left hover:text-[rgb(152,165,133)] hover:[transition:all_0.5s_ease-in-out]"
                href="./index.html#testimonials"
                >Users Experience</a
              >
            </li>
            <li class="w-max">
              <a
                class="no-underline text-[rgba(255,_255,_255,_1)] sm:text-[rgba(0,0,0,1)] font-[Mulish] antialiased text-xs sm:text-sm font-bold leading-normal text-left hover:text-[rgb(152,165,133)] hover:[transition:all_0.5s_ease-in-out]"
                href="./index.html#contact-us"
                >Contact Us</a
              >
            </li>
          </ul>
        </nav>
        <div class="mobile-toggle block sm:hidden">
          <img
            class="icon-menu w-[100%] h-[100%] max-w-5 max-h-[11.25px] block bg-[rgba(249,_253,_243,_1)]"
            src="./assets/images/icon-menu.svg"
            alt="menu-toggle-icon"
          />
          <img
            class="icon-close-menu w-[100%] h-[100%] max-w-5 max-h-5 hidden bg-[rgba(249,_253,_243,_1)]"
            src="./assets/images/icon-close-menu.svg"
            alt="menu-toggle-icon"
          />
        </div>
      </div>
    </section>`,
    image: "./assets/sections-screenshots/header.png",
  },
  
  {
    title: "hero",
    html: `    <section id="hero" class="pt-20">
      <div class="hero container mx-auto flex gap-4 flex-col items-center px-[5%] py-5 sm:py-14 pb-0">
        <div
          id="hero-top"
          class="hero-top flex gap-4 items-center flex-col w-full max-w-[900px]"
        >
          <span
            class="hero-main-phrase capitalize font-['Kumbh_Sans'] text-xl [@media_(min-width:400px)_and_(max-width:640px)]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.4rem] font-bold leading-normal text-center antialiased text-[rgba(18,20,29,1)]"
            >Get your all social service from Our Site</span
          >
          <span
            class="hero-sub-phrase font-['Kumbh_Sans'] text-sm md:text-base xl:text-lg font-normal leading-normal text-justify text-[rgba(18,20,29,1)] antialiased w-full max-w-[728.05px]"
            >Social media networks are open to all. Social media is typically
            used for social interaction and access to news and information, and
            decision making.</span
          >
        </div>
        <div
          id="hero-mid"
          class="hero-mid flex flex-wrap gap-4 items-center w-full justify-center"
        >
          <div
            class="hero-strt-free flex justify-center px-[31.2px] py-[16.64px] rounded-[5.2px] bg-[rgba(18,_20,_29,_1)] w-full h-full max-w-[181.4px] max-h-[51.63px]"
          >
            <a
              class="font-[Inter] antialiased text-sm md:text-base font-semibold leading-normal text-right whitespace-nowrap text-[rgba(255,255,255,1)]"
              href="./error404.html"
              >Start Free Trial</a
            >
          </div>
          <div
            class="hero-demo flex gap-[0.4rem] items-center justify-center px-8 py-[14.56px] rounded-[5.2px] border-2 border-solid border-[rgba(18,20,29,1)] bg-[rgba(255,255,255,1)] w-full h-full max-w-[181.4px] max-h-[51.63px]"
          >
            <img
              class="w-[18.72px] h-[18.72px] p-0.5"
              src="./assets/images/play-video-icon.svg"
              alt="play-video-icon"
            />
            <a
              class="whitespace-nowrap font-[Inter] antialiased text-sm md:text-base font-semibold leading-normal text-right text-[rgba(18,20,29,1)]"
              href="./error404.html"
              >Watch A Demo</a
            >
          </div>
        </div>
        <div
          id="hero-bottom"
          class="hero-bottom flex flex-col items-center gap-8 w-full max-w-[953px] h-full"
        >
          <div class="hero-rating flex items-center w-full justify-center flex-wrap gap-2">

            <div class="star-ratings flex justify-center items-center" id="star-ratings">
              <span class="bg-gray-500 w-4 h-4 [clip-path:polygon(_42.81%_7.169%,42.81%_7.169%,43.541%_5.556%,44.571%_4.302%,45.825%_3.405%,47.229%_2.868%,48.707%_2.688%,50.186%_2.868%,51.589%_3.405%,52.843%_4.302%,53.874%_5.556%,54.605%_7.169%,61.237%_28.516%,61.237%_28.516%,61.532%_29.29%,61.911%_30.008%,62.369%_30.662%,62.898%_31.247%,63.49%_31.758%,64.137%_32.189%,64.833%_32.533%,65.569%_32.787%,66.339%_32.943%,67.134%_32.996%,88.597%_32.996%,88.597%_32.996%,90.29%_33.225%,91.75%_33.862%,92.952%_34.832%,93.875%_36.062%,94.495%_37.477%,94.789%_39.003%,94.734%_40.565%,94.306%_42.089%,93.483%_43.502%,92.242%_44.727%,74.878%_57.92%,74.878%_57.92%,74.265%_58.452%,73.73%_59.052%,73.276%_59.709%,72.907%_60.416%,72.626%_61.162%,72.434%_61.939%,72.336%_62.738%,72.333%_63.549%,72.429%_64.362%,72.626%_65.17%,79.258%_86.516%,79.258%_86.516%,79.573%_88.271%,79.445%_89.919%,78.934%_91.415%,78.101%_92.713%,77.006%_93.766%,75.709%_94.53%,74.271%_94.958%,72.753%_95.004%,71.214%_94.622%,69.716%_93.766%,52.352%_80.574%,52.352%_80.574%,51.679%_80.128%,50.968%_79.781%,50.23%_79.533%,49.473%_79.385%,48.707%_79.335%,47.941%_79.385%,47.185%_79.533%,46.446%_79.781%,45.736%_80.128%,45.062%_80.574%,27.699%_93.766%,27.699%_93.766%,26.2%_94.622%,24.662%_95.004%,23.143%_94.958%,21.706%_94.53%,20.409%_93.766%,19.314%_92.713%,18.48%_91.415%,17.969%_89.919%,17.841%_88.271%,18.156%_86.516%,24.789%_65.17%,24.789%_65.17%,24.986%_64.362%,25.082%_63.549%,25.079%_62.738%,24.98%_61.939%,24.789%_61.162%,24.507%_60.416%,24.138%_59.709%,23.685%_59.052%,23.15%_58.452%,22.536%_57.92%,5.172%_44.727%,5.172%_44.727%,3.931%_43.502%,3.108%_42.089%,2.681%_40.565%,2.626%_39.003%,2.92%_37.477%,3.539%_36.062%,4.462%_34.832%,5.665%_33.862%,7.124%_33.225%,8.817%_32.996%,30.28%_32.996%,30.28%_32.996%,31.075%_32.943%,31.845%_32.787%,32.582%_32.533%,33.277%_32.189%,33.925%_31.758%,34.517%_31.247%,35.045%_30.662%,35.503%_30.008%,35.883%_29.29%,36.177%_28.516%,42.81%_7.169%_)]"></span>
              <span class="bg-gray-500 w-4 h-4 [clip-path:polygon(_42.81%_7.169%,42.81%_7.169%,43.541%_5.556%,44.571%_4.302%,45.825%_3.405%,47.229%_2.868%,48.707%_2.688%,50.186%_2.868%,51.589%_3.405%,52.843%_4.302%,53.874%_5.556%,54.605%_7.169%,61.237%_28.516%,61.237%_28.516%,61.532%_29.29%,61.911%_30.008%,62.369%_30.662%,62.898%_31.247%,63.49%_31.758%,64.137%_32.189%,64.833%_32.533%,65.569%_32.787%,66.339%_32.943%,67.134%_32.996%,88.597%_32.996%,88.597%_32.996%,90.29%_33.225%,91.75%_33.862%,92.952%_34.832%,93.875%_36.062%,94.495%_37.477%,94.789%_39.003%,94.734%_40.565%,94.306%_42.089%,93.483%_43.502%,92.242%_44.727%,74.878%_57.92%,74.878%_57.92%,74.265%_58.452%,73.73%_59.052%,73.276%_59.709%,72.907%_60.416%,72.626%_61.162%,72.434%_61.939%,72.336%_62.738%,72.333%_63.549%,72.429%_64.362%,72.626%_65.17%,79.258%_86.516%,79.258%_86.516%,79.573%_88.271%,79.445%_89.919%,78.934%_91.415%,78.101%_92.713%,77.006%_93.766%,75.709%_94.53%,74.271%_94.958%,72.753%_95.004%,71.214%_94.622%,69.716%_93.766%,52.352%_80.574%,52.352%_80.574%,51.679%_80.128%,50.968%_79.781%,50.23%_79.533%,49.473%_79.385%,48.707%_79.335%,47.941%_79.385%,47.185%_79.533%,46.446%_79.781%,45.736%_80.128%,45.062%_80.574%,27.699%_93.766%,27.699%_93.766%,26.2%_94.622%,24.662%_95.004%,23.143%_94.958%,21.706%_94.53%,20.409%_93.766%,19.314%_92.713%,18.48%_91.415%,17.969%_89.919%,17.841%_88.271%,18.156%_86.516%,24.789%_65.17%,24.789%_65.17%,24.986%_64.362%,25.082%_63.549%,25.079%_62.738%,24.98%_61.939%,24.789%_61.162%,24.507%_60.416%,24.138%_59.709%,23.685%_59.052%,23.15%_58.452%,22.536%_57.92%,5.172%_44.727%,5.172%_44.727%,3.931%_43.502%,3.108%_42.089%,2.681%_40.565%,2.626%_39.003%,2.92%_37.477%,3.539%_36.062%,4.462%_34.832%,5.665%_33.862%,7.124%_33.225%,8.817%_32.996%,30.28%_32.996%,30.28%_32.996%,31.075%_32.943%,31.845%_32.787%,32.582%_32.533%,33.277%_32.189%,33.925%_31.758%,34.517%_31.247%,35.045%_30.662%,35.503%_30.008%,35.883%_29.29%,36.177%_28.516%,42.81%_7.169%_)]"></span>
              <span class="bg-gray-500 w-4 h-4 [clip-path:polygon(_42.81%_7.169%,42.81%_7.169%,43.541%_5.556%,44.571%_4.302%,45.825%_3.405%,47.229%_2.868%,48.707%_2.688%,50.186%_2.868%,51.589%_3.405%,52.843%_4.302%,53.874%_5.556%,54.605%_7.169%,61.237%_28.516%,61.237%_28.516%,61.532%_29.29%,61.911%_30.008%,62.369%_30.662%,62.898%_31.247%,63.49%_31.758%,64.137%_32.189%,64.833%_32.533%,65.569%_32.787%,66.339%_32.943%,67.134%_32.996%,88.597%_32.996%,88.597%_32.996%,90.29%_33.225%,91.75%_33.862%,92.952%_34.832%,93.875%_36.062%,94.495%_37.477%,94.789%_39.003%,94.734%_40.565%,94.306%_42.089%,93.483%_43.502%,92.242%_44.727%,74.878%_57.92%,74.878%_57.92%,74.265%_58.452%,73.73%_59.052%,73.276%_59.709%,72.907%_60.416%,72.626%_61.162%,72.434%_61.939%,72.336%_62.738%,72.333%_63.549%,72.429%_64.362%,72.626%_65.17%,79.258%_86.516%,79.258%_86.516%,79.573%_88.271%,79.445%_89.919%,78.934%_91.415%,78.101%_92.713%,77.006%_93.766%,75.709%_94.53%,74.271%_94.958%,72.753%_95.004%,71.214%_94.622%,69.716%_93.766%,52.352%_80.574%,52.352%_80.574%,51.679%_80.128%,50.968%_79.781%,50.23%_79.533%,49.473%_79.385%,48.707%_79.335%,47.941%_79.385%,47.185%_79.533%,46.446%_79.781%,45.736%_80.128%,45.062%_80.574%,27.699%_93.766%,27.699%_93.766%,26.2%_94.622%,24.662%_95.004%,23.143%_94.958%,21.706%_94.53%,20.409%_93.766%,19.314%_92.713%,18.48%_91.415%,17.969%_89.919%,17.841%_88.271%,18.156%_86.516%,24.789%_65.17%,24.789%_65.17%,24.986%_64.362%,25.082%_63.549%,25.079%_62.738%,24.98%_61.939%,24.789%_61.162%,24.507%_60.416%,24.138%_59.709%,23.685%_59.052%,23.15%_58.452%,22.536%_57.92%,5.172%_44.727%,5.172%_44.727%,3.931%_43.502%,3.108%_42.089%,2.681%_40.565%,2.626%_39.003%,2.92%_37.477%,3.539%_36.062%,4.462%_34.832%,5.665%_33.862%,7.124%_33.225%,8.817%_32.996%,30.28%_32.996%,30.28%_32.996%,31.075%_32.943%,31.845%_32.787%,32.582%_32.533%,33.277%_32.189%,33.925%_31.758%,34.517%_31.247%,35.045%_30.662%,35.503%_30.008%,35.883%_29.29%,36.177%_28.516%,42.81%_7.169%_)]"></span>
              <span class="bg-gray-500 w-4 h-4 [clip-path:polygon(_42.81%_7.169%,42.81%_7.169%,43.541%_5.556%,44.571%_4.302%,45.825%_3.405%,47.229%_2.868%,48.707%_2.688%,50.186%_2.868%,51.589%_3.405%,52.843%_4.302%,53.874%_5.556%,54.605%_7.169%,61.237%_28.516%,61.237%_28.516%,61.532%_29.29%,61.911%_30.008%,62.369%_30.662%,62.898%_31.247%,63.49%_31.758%,64.137%_32.189%,64.833%_32.533%,65.569%_32.787%,66.339%_32.943%,67.134%_32.996%,88.597%_32.996%,88.597%_32.996%,90.29%_33.225%,91.75%_33.862%,92.952%_34.832%,93.875%_36.062%,94.495%_37.477%,94.789%_39.003%,94.734%_40.565%,94.306%_42.089%,93.483%_43.502%,92.242%_44.727%,74.878%_57.92%,74.878%_57.92%,74.265%_58.452%,73.73%_59.052%,73.276%_59.709%,72.907%_60.416%,72.626%_61.162%,72.434%_61.939%,72.336%_62.738%,72.333%_63.549%,72.429%_64.362%,72.626%_65.17%,79.258%_86.516%,79.258%_86.516%,79.573%_88.271%,79.445%_89.919%,78.934%_91.415%,78.101%_92.713%,77.006%_93.766%,75.709%_94.53%,74.271%_94.958%,72.753%_95.004%,71.214%_94.622%,69.716%_93.766%,52.352%_80.574%,52.352%_80.574%,51.679%_80.128%,50.968%_79.781%,50.23%_79.533%,49.473%_79.385%,48.707%_79.335%,47.941%_79.385%,47.185%_79.533%,46.446%_79.781%,45.736%_80.128%,45.062%_80.574%,27.699%_93.766%,27.699%_93.766%,26.2%_94.622%,24.662%_95.004%,23.143%_94.958%,21.706%_94.53%,20.409%_93.766%,19.314%_92.713%,18.48%_91.415%,17.969%_89.919%,17.841%_88.271%,18.156%_86.516%,24.789%_65.17%,24.789%_65.17%,24.986%_64.362%,25.082%_63.549%,25.079%_62.738%,24.98%_61.939%,24.789%_61.162%,24.507%_60.416%,24.138%_59.709%,23.685%_59.052%,23.15%_58.452%,22.536%_57.92%,5.172%_44.727%,5.172%_44.727%,3.931%_43.502%,3.108%_42.089%,2.681%_40.565%,2.626%_39.003%,2.92%_37.477%,3.539%_36.062%,4.462%_34.832%,5.665%_33.862%,7.124%_33.225%,8.817%_32.996%,30.28%_32.996%,30.28%_32.996%,31.075%_32.943%,31.845%_32.787%,32.582%_32.533%,33.277%_32.189%,33.925%_31.758%,34.517%_31.247%,35.045%_30.662%,35.503%_30.008%,35.883%_29.29%,36.177%_28.516%,42.81%_7.169%_)]"></span>
              <span class="bg-gray-500 w-4 h-4 [clip-path:polygon(_42.81%_7.169%,42.81%_7.169%,43.541%_5.556%,44.571%_4.302%,45.825%_3.405%,47.229%_2.868%,48.707%_2.688%,50.186%_2.868%,51.589%_3.405%,52.843%_4.302%,53.874%_5.556%,54.605%_7.169%,61.237%_28.516%,61.237%_28.516%,61.532%_29.29%,61.911%_30.008%,62.369%_30.662%,62.898%_31.247%,63.49%_31.758%,64.137%_32.189%,64.833%_32.533%,65.569%_32.787%,66.339%_32.943%,67.134%_32.996%,88.597%_32.996%,88.597%_32.996%,90.29%_33.225%,91.75%_33.862%,92.952%_34.832%,93.875%_36.062%,94.495%_37.477%,94.789%_39.003%,94.734%_40.565%,94.306%_42.089%,93.483%_43.502%,92.242%_44.727%,74.878%_57.92%,74.878%_57.92%,74.265%_58.452%,73.73%_59.052%,73.276%_59.709%,72.907%_60.416%,72.626%_61.162%,72.434%_61.939%,72.336%_62.738%,72.333%_63.549%,72.429%_64.362%,72.626%_65.17%,79.258%_86.516%,79.258%_86.516%,79.573%_88.271%,79.445%_89.919%,78.934%_91.415%,78.101%_92.713%,77.006%_93.766%,75.709%_94.53%,74.271%_94.958%,72.753%_95.004%,71.214%_94.622%,69.716%_93.766%,52.352%_80.574%,52.352%_80.574%,51.679%_80.128%,50.968%_79.781%,50.23%_79.533%,49.473%_79.385%,48.707%_79.335%,47.941%_79.385%,47.185%_79.533%,46.446%_79.781%,45.736%_80.128%,45.062%_80.574%,27.699%_93.766%,27.699%_93.766%,26.2%_94.622%,24.662%_95.004%,23.143%_94.958%,21.706%_94.53%,20.409%_93.766%,19.314%_92.713%,18.48%_91.415%,17.969%_89.919%,17.841%_88.271%,18.156%_86.516%,24.789%_65.17%,24.789%_65.17%,24.986%_64.362%,25.082%_63.549%,25.079%_62.738%,24.98%_61.939%,24.789%_61.162%,24.507%_60.416%,24.138%_59.709%,23.685%_59.052%,23.15%_58.452%,22.536%_57.92%,5.172%_44.727%,5.172%_44.727%,3.931%_43.502%,3.108%_42.089%,2.681%_40.565%,2.626%_39.003%,2.92%_37.477%,3.539%_36.062%,4.462%_34.832%,5.665%_33.862%,7.124%_33.225%,8.817%_32.996%,30.28%_32.996%,30.28%_32.996%,31.075%_32.943%,31.845%_32.787%,32.582%_32.533%,33.277%_32.189%,33.925%_31.758%,34.517%_31.247%,35.045%_30.662%,35.503%_30.008%,35.883%_29.29%,36.177%_28.516%,42.81%_7.169%_)]"></span>
            </div>

            <div 
              class="font-['Plus_Jakarta_Sans'] text-sm md:text-base font-medium leading-normal text-center whitespace-pre w-full max-w-[100px]"
              >4900+ <span onchange="caliberateRating(event)" onload="caliberateRating(event)" id="rating-num" class="font-['Plus_Jakarta_Sans'] text-sm md:text-base font-medium leading-normal text-center whitespace-pre w-full max-w-[100px]">3.5</span> Stars</div
            >
          </div>
          <div
            class="hero-main-ph flex justify-center w-full h-full max-w-[482px] max-h-[396px]"
          >
            <img
              class="h-auto w-auto max-w-full max-h-full"
              src="./assets/images/hero-main-image.png"
              alt="photo"
            />
          </div>
        </div>
      </div>
    </section>`,
    image: "./assets/sections-screenshots/hero.png",
  },
  
  {
    title: "intro",
    html: `    <section id="intro">
      <div class="intro container mx-auto px-[5%] py-5 flex gap-8 flex-col w-full">
        <div
          class="intro-top pt-14 md:pt-[70px] bg-[linear-gradient(180deg,#407BFF_0%,#FFFFFF_68.94%)] flex gap-8 flex-col items-center w-full max-w-[1236px] rounded-[20px]"
        >
          <h2
            class="intro-top-main-phrase antialiased px-[2%] w-full h-auto max-w-[567px] font-['Kumbh_Sans'] text-base md:text-xl lg:text-2xl xl:text-3xl font-bold leading-normal text-center text-[rgba(11,52,142,1)]"
          >
            Take the lead in smartly social media marketing
          </h2>
          <div
            class="intro-top-divs flex gap-3 justify-center w-full flex-wrap px-[2%] py-0"
          >
            <div
              class="intro-strategy flex gap-3 flex-col items-center justify-between w-full p-5 max-w-[330.62px] rounded-[15.9px] border-2 border-solid border-[rgba(18,20,29,0.1)] bg-[rgba(255,255,255,1)]"
            >
              <img
                class="w-full h-full max-w-[31px] max-h-[43px]"
                src="./assets/images/intro-strategy.svg"
                alt="photo"
              />
              <h3
                class="font-[Inter] antialiased text-sm lg:text-base font-bold leading-normal text-center text-[rgba(18,_20,_29,_1)]"
              >
                Social Media Strategy
              </h3>
              <p
                class="font-[Inter] antialiased text-xs font-normal leading-normal text-justify text-[rgba(18,_20,_29,_1)]"
              >
                A social media strategy is a summary of everything you plan to
                do and hope to achieve on social media.
              </p>
            </div>
            <div
              class="intro-market-plan flex gap-3 flex-col items-center justify-between w-full p-5 max-w-[330.62px] rounded-[15.9px] border-2 border-solid border-[rgba(18,20,29,0.1)] bg-[rgba(255,255,255,1)]"
            >
              <img
                class="w-full h-full max-w-[31px] max-h-[43px]"
                src="./assets/images/intro-market-plan.svg"
                alt="photo"
              />
              <h3
                class="font-[Inter] antialiased text-sm lg:text-base font-bold leading-normal text-center text-[rgba(18,_20,_29,_1)]"
              >
                Digital Marketing Plan
              </h3>
              <p
                class="font-[Inter] antialiased text-xs font-normal leading-normal text-justify text-[rgba(18,_20,_29,_1)]"
              >
                Digital marketing is important because it connects a business
                with its customers & is effective in all industries.
              </p>
            </div>
            <div
              class="intro-optimize flex gap-3 flex-col items-center justify-between w-full p-5 max-w-[330.62px] rounded-[15.9px] border-2 border-solid border-[rgba(18,20,29,0.1)] bg-[rgba(255,255,255,1)]"
            >
              <img
                class="w-full h-full max-w-[31px] max-h-[43px]"
                src="./assets/images/intro-seo.svg"
                alt="photo"
              />
              <h3
                class="font-[Inter] antialiased text-sm lg:text-base font-bold leading-normal text-center text-[rgba(18,_20,_29,_1)]"
              >
                Search Engine Optimization
              </h3>
              <p
                class="font-[Inter] antialiased text-xs font-normal leading-normal text-justify text-[rgba(18,_20,_29,_1)]"
              >
                Search engine optimization (SEO) is the art and science of
                getting pages to rank higher in search engines.
              </p>
            </div>
          </div>
        </div>
        <div
          class="intro-mid flex gap-4 flex-wrap items-center justify-center bg-[rgba(218,_230,_255,_1)] w-full max-w-[1240px] px-24 sm:px-28 py-10"
        >
          <div class="years-of-experience flex gap-[0.1rem] flex-col mx-auto items-center sm:items-start">
            <p
              class="div-top font-['Kumbh_Sans'] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-normal text-left text-[rgba(18,20,29,1)]"
            >
              15
            </p>
            <p
              class="div-bottom font-[Inter] text-[0.87rem] font-normal leading-normal text-left text-[rgba(18,20,29,1)] whitespace-nowrap"
            >
              Years of experience
            </p>
          </div>
          <div class="social-followers flex gap-[0.1rem] flex-col mx-auto items-center sm:items-start">
            <p
              class="div-top font-['Kumbh_Sans'] text-xl sm:text-2xl md:text-3xlslg:text-4xl font-medium leading-normal text-left text-[rgba(18,20,29,1)]"
            >
              36k
            </p>
            <p
              class="div-bottom font-[Inter] text-[0.87rem] font-normal leading-normal text-left text-[rgba(18,20,29,1)] whitespace-nowrap"
            >
              Social followers
            </p>
          </div>
          <div class="projects-completed flex gap-[0.1rem] flex-col mx-auto items-center sm:items-start">
            <p
              class="div-top font-['Kumbh_Sans'] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-normal text-left text-[rgba(18,20,29,1)]"
            >
              6428
            </p>
            <p
              class="div-bottom font-[Inter] text-[0.87rem] font-normal leading-normal text-left text-[rgba(18,20,29,1)] whitespace-nowrap"
            >
              Projects completed
            </p>
          </div>
          <div class="social-profiles flex gap-[0.1rem] flex-col mx-auto items-center sm:items-start">
            <p
              class="div-top font-['Kumbh_Sans'] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-normal text-left text-[rgba(18,20,29,1)]"
            >
              92k
            </p>
            <p
              class="div-bottom font-[Inter] text-[0.87rem] font-normal leading-normal text-left text-[rgba(18,20,29,1)] whitespace-nowrap"
            >
              Social profiles
            </p>
          </div>
        </div>
        <div class="intro-bottom flex flex-col gap-6">
          <div class="bring-2geda [@media_(max-width:640px)]:flex [@media_(max-width:640px)]:flex-col [@media_(max-width:640px)]:items-center">
            <img
              class="w-full sm:w-1/2 h-full max-w-[500px] max-h-[300px] min-w-[200px] rounded-[20px] float-none sm:float-left sm:mr-8"
              src="./assets/images/bring-2geda.png"
              alt="photo"
            />
            <div class="bottom-inner-div pt-5">
              <h2
                class="font-['Kumbh_Sans'] text-base md:text-2xl lg:text-3xl font-bold leading-normal text-center sm:text-left text-[rgba(18,20,29,1)]"
              >
                Bring your target users together on social media
              </h2>
              <p
                class="font-['Kumbh_Sans'] text-sm lg:text-base font-medium leading-normal hyphens-auto text-justify sm:text-left text-[rgba(18,_20,_29,_1)] pt-5"
              >
                Social media audience research isn’t complicated. It’s mainly
                about narrowing your focus while expanding your reach.
              </p>
              <p
                class="font-[Inter] text-sm lg:text-base font-normal leading-normal hyphens-auto text-justify sm:text-left text-[rgba(18,_20,_29,_1)] pt-5"
              >
                We've created a free social media audience research template to
                help you keep track of all the information you learn as you
                conduct your research.
              </p>
            </div>
          </div>

          <div class="build-and-reach pt-8">
            <img
              class="w-full sm:w-1/2 h-full max-w-[500px] max-h-[300px] min-w-[200px] rounded-[20px] float-none sm:float-right mr-0 sm:ml-8"
              src="./assets/images/build-and-reach.png"
              alt="photo"
            />
            <div class="bottom-inner-div pt-5">
              <h2
                class="font-['Kumbh_Sans'] text-base md:text-2xl lg:text-3xl font-bold leading-normal text-center sm:text-left text-[rgba(18,20,29,1)]"
              >
                Build your brand & reach out to social followers
              </h2>
              <p
                class="font-['Kumbh_Sans'] text-sm lg:text-base font-medium leading-normal hyphens-auto text-justify sm:text-left text-[rgba(18,_20,_29,_1)] pt-5"
              >
                Brand awareness is cited as the top priority for marketers, and
                social media channels are a one-to-many solution for getting the
                word out about your products and services.
              </p>
              <p
                class="font-[Inter] text-sm lg:text-base font-normal leading-normal hyphens-auto text-justify sm:text-left text-[rgba(18,_20,_29,_1)] pt-5"
              >
                By creating a strong brand presence on social media, you can
                reach a broader audience & get partners brand advocates to post
                content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>`,
    image: "./assets/sections-screenshots/intro.png",
  },
  
  {
    title: "about-us",
    html: `    <section id="about-us">
      <div
        class="about-us container mx-auto pl-[5%] pr-[5%] pt-[70px] flex gap-4 flex-col"
      >
        <h2
          class="font-['Kumbh_Sans'] text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal antialiased text-center text-[rgba(18,_20,_29,_1)]"
        >
          ABOUT US
        </h2>
        <div class="about-us-main [@media_(max-width:768px)]:flex [@media_(max-width:768px)]:flex-col [@media_(max-width:768px)]:items-center">
          <div
            class="about-us-img rounded-[20px] md:float-left w-full md:w-1/2 h-full max-w-[500px] max-h-[300px] md:mr-8 flex justify-center"
          >
            <img
              class="w-auto h-auto max-w-full rounded-[20px]"
              src="./assets/images/abt-us-image.png"
              alt="photo"
            />
          </div>
          <div
            class="about-us-txt pt-5 [@media_(max-width:768px)]:flex  [@media_(max-width:768px)]:flex-col  [@media_(max-width:640px)]:items-center"
          >
            <h3 class="antialiased font-['Kumbh_Sans'] text-lg md:text-xl lg:text-2xl font-bold leading-normal text-center md:text-left text-[rgba(18,20,29,1)]">The easiest way to promote social media</h3>
            <span class="md:pt-4 flex flex-col md:items-start items-center md:block">
              <h4
                class="antialiased font-['Kumbh_Sans'] text-[15px] md:text-lg font-bold leading-normal text-left text-[rgba(18,20,29,1)] pt-5"
              >
                Build A Community
              </h4>
              <p
                class="antialiased font-[Inter] text-xs sm:text-sm lg:text-base font-normal leading-normal hyphens-auto text-justify sm:text-left text-[rgba(18,20,29,1)]"
              >
                Community building is a field of practices directed toward the
                creation or enhancement of community among individuals.
              </p>
            </span>
            <span class="md:pt-4 flex flex-col md:items-start items-center md:block">
              <h4
                class="antialiased font-['Kumbh_Sans'] text-[15px] md:text-lg font-bold leading-normal text-left text-[rgba(18,20,29,1)] pt-5"
              >
                Video & Live Streaming
              </h4>
              <p
                class="antialiased font-[Inter] text-xs sm:text-sm lg:text-base font-normal leading-normal hyphens-auto text-justify sm:text-left text-[rgba(18,20,29,1)]"
              >
                Connect your audio and video sources. This involves on audio and
                video sources to your main live streaming setup.
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>`,
    image: "./assets/sections-screenshots/about-us.png",
  },
  
  {
    title: "testimonials",
    html: `    <section id="testimonials" class="mx-[3%]">
      <div class="testimonials container pt-16 md:pt-20 lg:pt-24 mx-auto my-0 flex flex-col gap-8 overflow-x-hidden rounded-[20px] bg-[linear-gradient(0deg,_#4D84FF_-0.05%,_#F0F0F0_37.11%,_#FFFFFF_48.82%)]">
        <h2 class="antialiased -mb-[40px] font-['Kumbh_Sans'] text-2xl font-bold leading-normal text-center text-[rgba(0,0,0,1)]">User Experiences</h2>
        <div class="testimonials-track px-[5%] flex gap-3 items-center justify-evenly w-full max-w-[1241px] h-auto p-[50px] overflow-x-hidden">
          <div class="testimonial flex flex-col p-[10px] gap-8 items-center w-full max-w-[322.66px] min-w-[200px] sm:min-w-[300px] h-auto rounded-[6.78px] border border-solid border-[rgba(0,0,0,0.1)] bg-[rgba(255,_255,_255,_1)] animate-[slider-anim_5s_ease-in]">
            <div class="testimonial-text-div flex flex-col w-full max-w-[276.13px] gap-6">
              <img
                class="quotation-mark-icon w-6 h-[18.66px]"
                src="./assets/images/quotation-mark.svg"
              />
              <p class="font-[Inter] antialiased text-xs font-semibold leading-normal text-left text-[rgba(18,20,29,1)]">
                They are able to help a startup like mine scale and are very
                responsive to all of our unique needs.
              </p>
            </div>
            <div class="reviewerDiv self-start flex gap-2 items-center w-full max-w-full h-auto rounded-[6.78px]">
              <div class="reviewer-photo-wrapper w-full h-full max-w-10 max-h-10 overflow-hidden rounded-full [aspect-ratio:1/1] flex justify-center">
                <img class="w-auto h-auto max-w-full max-h-full" src="./assets/images/gilbert-dp.svg" />
              </div>
              <span class="flex flex-col gap-1"
                ><p class="font-[Inter] antialiased text-xs font-semibold leading-normal text-left text-[rgba(18,20,29,1)]">Gilbert Harbert</p>
                <p class="antialiased font-[Inter] text-[0.68rem] font-normal leading-normal text-left text-[rgba(18,20,29,1)]">CEO, NoonBrew</p></span
              >
            </div>
          </div>
          <div class="testimonial flex flex-col p-[10px] gap-8 items-center w-full max-w-[322.66px] min-w-[200px] sm:min-w-[300px] h-auto rounded-[6.78px] border border-solid border-[rgba(0,0,0,0.1)] bg-[rgba(255,_255,_255,_1)] animate-[slider-anim_5s_ease-in]">
            <div class="testimonial-text-div flex flex-col w-full max-w-[276.13px] gap-6">
              <img
                class="quotation-mark-icon w-6 h-[18.66px]"
                src="./assets/images/quotation-mark.svg"
              />
              <p class="font-[Inter] antialiased text-xs font-semibold leading-normal text-left text-[rgba(18,20,29,1)]">
                Division of Labor's creative ideas were great, and working with
                their team was truly easy they were very responsive.
              </p>
            </div>
            <div class="reviewerDiv self-start flex gap-2 items-center w-full max-w-full h-auto rounded-[6.78px]">
              <div class="reviewer-photo-wrapper w-full h-full max-w-10 max-h-10 overflow-hidden rounded-full [aspect-ratio:1/1] flex justify-center">
                <img class="w-auto h-auto max-w-full max-h-full" src="./assets/images/vincent-dp.svg" />
              </div>
              <span class="flex flex-col gap-1"
                ><p class="font-[Inter] antialiased text-xs font-semibold leading-normal text-left text-[rgba(18,20,29,1)]">Vincent McSabbu</p>
                <p class="antialiased font-[Inter] text-[0.68rem] font-normal leading-normal text-left text-[rgba(18,20,29,1)]">Marketing &amp; Office Coordinator</p></span
              >
            </div>
          </div>
          <div class="testimonial flex flex-col p-[10px] gap-8 items-center w-full max-w-[322.66px] min-w-[200px] sm:min-w-[300px] h-auto rounded-[6.78px] border border-solid border-[rgba(0,0,0,0.1)] bg-[rgba(255,_255,_255,_1)] animate-[slider-anim_5s_ease-in]">
            <div class="testimonial-text-div flex flex-col w-full max-w-[276.13px] gap-6">
              <img
                class="quotation-mark-icon w-6 h-[18.66px]"
                src="./assets/images/quotation-mark.svg"
              />
              <p class="font-[Inter] antialiased text-xs font-semibold leading-normal text-left text-[rgba(18,20,29,1)]">
                We were blown away when we saw Mixland. The combination of
                social, email, knowledge base, mobile, ets.
              </p>
            </div>
            <div class="reviewerDiv self-start flex gap-2 items-center w-full max-w-full h-auto rounded-[6.78px]">
              <div class="reviewer-photo-wrapper w-full h-full max-w-10 max-h-10 overflow-hidden rounded-full [aspect-ratio:1/1] flex justify-center">
                <img class="w-auto h-auto max-w-full max-h-full" src="./assets/images/robert-dp.svg" />
              </div>
              <span class="flex flex-col gap-1"
                class="font-[Inter] tex antialiasedt-xs font-semibold leading-normal text-left text-[rgba(18,20,29,1)]" ><p>Robert Hart</p>
                <p class="antialiased font-[Inter] text-[0.68rem] font-normal leading-normal text-left text-[rgba(18,20,29,1)]">Owner, Beards of Men</p></span
              >
            </div>
          </div>
          <div class="testimonial flex flex-col p-[10px] gap-8 items-center w-full max-w-[322.66px] min-w-[200px] sm:min-w-[300px] h-auto rounded-[6.78px] border border-solid border-[rgba(0,0,0,0.1)] bg-[rgba(255,_255,_255,_1)] animate-[slider-anim_5s_ease-in]">
            <div class="testimonial-text-div flex flex-col w-full max-w-[276.13px] gap-6">
              <img
                class="quotation-mark-icon w-6 h-[18.66px]"
                src="./assets/images/quotation-mark.svg"
              />
              <p class="font-[Inter] antialiased text-xs font-semibold leading-normal text-left text-[rgba(18,20,29,1)]">
                They are able to help a startup like mine scale and are very
                responsive to all of our unique needs.
              </p>
            </div>
            <div class="reviewerDiv self-start flex gap-2 items-center w-full max-w-full h-auto rounded-[6.78px]">
              <div class="reviewer-photo-wrapper w-full h-full max-w-10 max-h-10 overflow-hidden rounded-full [aspect-ratio:1/1] flex justify-center">
                <img class="w-auto h-auto max-w-full max-h-full" src="./assets/images/gilbert-dp.svg" />
              </div>
              <span class="flex flex-col gap-1"
                ><p class="font-[Inter] antialiased text-xs font-semibold leading-normal text-left text-[rgba(18,20,29,1)]">Gilbert Harbert</p>
                <p class="antialiased font-[Inter] text-[0.68rem] font-normal leading-normal text-left text-[rgba(18,20,29,1)]">CEO, NoonBrew</p></span
              >
            </div>
          </div>
          <div class="testimonial flex flex-col p-[10px] gap-8 items-center w-full max-w-[322.66px] min-w-[200px] sm:min-w-[300px] h-auto rounded-[6.78px] border border-solid border-[rgba(0,0,0,0.1)] bg-[rgba(255,_255,_255,_1)] animate-[slider-anim_5s_ease-in]">
            <div class="testimonial-text-div flex flex-col w-full max-w-[276.13px] gap-6">
              <img
                class="quotation-mark-icon w-6 h-[18.66px]"
                src="./assets/images/quotation-mark.svg"
              />
              <p class="font-[Inter] antialiased text-xs font-semibold leading-normal text-left text-[rgba(18,20,29,1)]">
                Division of Labor’s creative ideas were great, and working with
                their team was truly easy they were very responsive.
              </p>
            </div>
            <div class="reviewerDiv self-start flex gap-2 items-center w-full max-w-full h-auto rounded-[6.78px]">
              <div class="reviewer-photo-wrapper w-full h-full max-w-10 max-h-10 overflow-hidden rounded-full [aspect-ratio:1/1] flex justify-center">
                <img class="w-auto h-auto max-w-full max-h-full" src="./assets/images/vincent-dp.svg" />
              </div>
              <span class="flex flex-col gap-1"
                ><p class="font-[Inter] antialiased text-xs font-semibold leading-normal text-left text-[rgba(18,20,29,1)]">Vincent McSabbu</p>
                <p class="antialiased font-[Inter] text-[0.68rem] font-normal leading-normal text-left text-[rgba(18,20,29,1)]">Marketing &amp; Office Coordinator</p></span
              >
            </div>
          </div>
          <div class="testimonial flex flex-col p-[10px] gap-8 items-center w-full max-w-[322.66px] min-w-[200px] sm:min-w-[300px] h-auto rounded-[6.78px] border border-solid border-[rgba(0,0,0,0.1)] bg-[rgba(255,_255,_255,_1)] animate-[slider-anim_5s_ease-in]">
            <div class="testimonial-text-div flex flex-col w-full max-w-[276.13px] gap-6">
              <img
                class="quotation-mark-icon w-6 h-[18.66px]"
                src="./assets/images/quotation-mark.svg"
              />
              <p class="font-[Inter] antialiased text-xs font-semibold leading-normal text-left text-[rgba(18,20,29,1)]">
                We were blown away when we saw Mixland. The combination of
                social, email, knowledge base, mobile, ets.
              </p>
            </div>
            <div class="reviewerDiv self-start flex gap-2 items-center w-full max-w-full h-auto rounded-[6.78px]">
              <div class="reviewer-photo-wrapper w-full h-full max-w-10 max-h-10 overflow-hidden rounded-full [aspect-ratio:1/1] flex justify-center">
                <img class="w-auto h-auto max-w-full max-h-full" src="./assets/images/robert-dp.svg" />
              </div>
              <span class="flex flex-col gap-1"
                class="font-[Inter] tex antialiasedt-xs font-semibold leading-normal text-left text-[rgba(18,20,29,1)]" ><p>Robert Hart</p>
                <p class="antialiased font-[Inter] text-[0.68rem] font-normal leading-normal text-left text-[rgba(18,20,29,1)]">Owner, Beards of Men</p></span
              >
            </div>
          </div>
          <div class="testimonial flex flex-col p-[10px] gap-8 items-center w-full max-w-[322.66px] min-w-[200px] sm:min-w-[300px] h-auto rounded-[6.78px] border border-solid border-[rgba(0,0,0,0.1)] bg-[rgba(255,_255,_255,_1)] animate-[slider-anim_5s_ease-in]">
            <div class="testimonial-text-div flex flex-col w-full max-w-[276.13px] gap-6">
              <img
                class="quotation-mark-icon w-6 h-[18.66px]"
                src="./assets/images/quotation-mark.svg"
              />
              <p class="font-[Inter] antialiased text-xs font-semibold leading-normal text-left text-[rgba(18,20,29,1)]">
                They are able to help a startup like mine scale and are very
                responsive to all of our unique needs.
              </p>
            </div>
            <div class="reviewerDiv self-start flex gap-2 items-center w-full max-w-full h-auto rounded-[6.78px]">
              <div class="reviewer-photo-wrapper w-full h-full max-w-10 max-h-10 overflow-hidden rounded-full [aspect-ratio:1/1] flex justify-center">
                <img class="w-auto h-auto max-w-full max-h-full" src="./assets/images/gilbert-dp.svg" />
              </div>
              <span class="flex flex-col gap-1"
                ><p class="font-[Inter] antialiased text-xs font-semibold leading-normal text-left text-[rgba(18,20,29,1)]">Gilbert Harbert</p>
                <p class="antialiased font-[Inter] text-[0.68rem] font-normal leading-normal text-left text-[rgba(18,20,29,1)]">CEO, NoonBrew</p></span
              >
            </div>
          </div>
          <div class="testimonial flex flex-col p-[10px] gap-8 items-center w-full max-w-[322.66px] min-w-[200px] sm:min-w-[300px] h-auto rounded-[6.78px] border border-solid border-[rgba(0,0,0,0.1)] bg-[rgba(255,_255,_255,_1)] animate-[slider-anim_5s_ease-in]">
            <div class="testimonial-text-div flex flex-col w-full max-w-[276.13px] gap-6">
              <img
                class="quotation-mark-icon w-6 h-[18.66px]"
                src="./assets/images/quotation-mark.svg"
              />
              <p class="font-[Inter] antialiased text-xs font-semibold leading-normal text-left text-[rgba(18,20,29,1)]">
                Division of Labor’s creative ideas were great, and working with
                their team was truly easy they were very responsive.
              </p>
            </div>
            <div class="reviewerDiv self-start flex gap-2 items-center w-full max-w-full h-auto rounded-[6.78px]">
              <div class="reviewer-photo-wrapper w-full h-full max-w-10 max-h-10 overflow-hidden rounded-full [aspect-ratio:1/1] flex justify-center">
                <img class="w-auto h-auto max-w-full max-h-full" src="./assets/images/vincent-dp.svg" />
              </div>
              <span class="flex flex-col gap-1"
                ><p class="font-[Inter] antialiased text-xs font-semibold leading-normal text-left text-[rgba(18,20,29,1)]">Vincent McSabbu</p>
                <p class="antialiased font-[Inter] text-[0.68rem] font-normal leading-normal text-left text-[rgba(18,20,29,1)]">Marketing &amp; Office Coordinator</p></span
              >
            </div>
          </div>
          <div class="testimonial flex flex-col p-[10px] gap-8 items-center w-full max-w-[322.66px] min-w-[200px] sm:min-w-[300px] h-auto rounded-[6.78px] border border-solid border-[rgba(0,0,0,0.1)] bg-[rgba(255,_255,_255,_1)] animate-[slider-anim_5s_ease-in]">
            <div class="testimonial-text-div flex flex-col w-full max-w-[276.13px] gap-6">
              <img
                class="quotation-mark-icon w-6 h-[18.66px]"
                src="./assets/images/quotation-mark.svg"
              />
              <p class="font-[Inter] antialiased text-xs font-semibold leading-normal text-left text-[rgba(18,20,29,1)]">
                We were blown away when we saw Mixland. The combination of
                social, email, knowledge base, mobile, ets.
              </p>
            </div>
            <div class="reviewerDiv self-start flex gap-2 items-center w-full max-w-full h-auto rounded-[6.78px]">
              <div class="reviewer-photo-wrapper w-full h-full max-w-10 max-h-10 overflow-hidden rounded-full [aspect-ratio:1/1] flex justify-center">
                <img class="w-auto h-auto max-w-full max-h-full" src="./assets/images/robert-dp.svg" />
              </div>
              <span class="flex flex-col gap-1"
                class="font-[Inter] tex antialiasedt-xs font-semibold leading-normal text-left text-[rgba(18,20,29,1)]" ><p>Robert Hart</p>
                <p class="antialiased font-[Inter] text-[0.68rem] font-normal leading-normal text-left text-[rgba(18,20,29,1)]">Owner, Beards of Men</p></span
              >
            </div>
          </div>
          <div class="testimonial flex flex-col p-[10px] gap-8 items-center w-full max-w-[322.66px] min-w-[200px] sm:min-w-[300px] h-auto rounded-[6.78px] border border-solid border-[rgba(0,0,0,0.1)] bg-[rgba(255,_255,_255,_1)] animate-[slider-anim_5s_ease-in]">
            <div class="testimonial-text-div flex flex-col w-full max-w-[276.13px] gap-6">
              <img
                class="quotation-mark-icon w-6 h-[18.66px]"
                src="./assets/images/quotation-mark.svg"
              />
              <p class="font-[Inter] antialiased text-xs font-semibold leading-normal text-left text-[rgba(18,20,29,1)]">
                Division of Labor’s creative ideas were great, and working with
                their team was truly easy they were very responsive.
              </p>
            </div>
            <div class="reviewerDiv self-start flex gap-2 items-center w-full max-w-full h-auto rounded-[6.78px]">
              <div class="reviewer-photo-wrapper w-full h-full max-w-10 max-h-10 overflow-hidden rounded-full [aspect-ratio:1/1] flex justify-center">
                <img class="w-auto h-auto max-w-full max-h-full" src="./assets/images/vincent-dp.svg" />
              </div>
              <span class="flex flex-col gap-1"
                ><p class="font-[Inter] antialiased text-xs font-semibold leading-normal text-left text-[rgba(18,20,29,1)]">Vincent McSabbu</p>
                <p class="antialiased font-[Inter] text-[0.68rem] font-normal leading-normal text-left text-[rgba(18,20,29,1)]">Marketing &amp; Office Coordinator</p></span
              >
            </div>
          </div>
        </div>
      </div>

      <div class="testimonials-indicators-div container mx-auto pt-2">
        <div class="t-indicators flex items-center justify-center mx-auto my-0 gap-2.5" id="t-indicators"></div>
      </div>
    </section>`,
    image: "./assets/sections-screenshots/testimonials.png",
  },
  
  {
    title: "contact-us",
    html: `    <section id="contact-us" class="contact container mx-auto flex gap-8 justify-center items-center pl-[3%] pr-[3%] pt-20">
      <div class="contact-form flex justify-center gap-6 flex-col items-center font-['Kumbh_Sans']">
        <div>
          <h3>Send us a message</h3>
        </div>
        <form class="form-container grid grid-cols-[1fr_1fr] gap-4 w-full sm:w-[500px]">
          <div class="lname bg-[rgba(242,242,242,1)] row-start-1 row-end-2 col-start-1 col-end-2">
            <!-- <label for="lname">Last Name:</label> -->
            <input
              class="cu antialiased outline-0 font-['Kumbh_Sans'] text-xs font-normal text-left w-full px-[14px] py-3 text-[rgba(51,51,51,1)] bg-[rgba(242,242,242,1)] border border-solid border-[rgba(189,189,189,1)]"
              type="text"
              id="lname"
              name="lastName"
              placeholder="Last Name"
              required
            />
          </div>
          <div class="fname bg-[rgba(242,242,242,1)] row-start-1 row-end-2 col-start-2 col-end-3">
            <!-- <label for="fname">First Name:</label> -->
            <input
              class="cu antialiased outline-0 font-['Kumbh_Sans'] text-xs font-normal text-left w-full px-[14px] py-3 text-[rgba(51,51,51,1)] bg-[rgba(242,242,242,1)] border border-solid border-[rgba(189,189,189,1)]"
              type="text"
              id="fname"
              name="firstName"
              placeholder="First Name"
              required
            />
          </div>
          <div class="email bg-[rgba(242,242,242,1)] relative row-start-2 row-end-3 col-start-1 col-end-3">
            <!-- <label for="email">Email:</label> -->
            <input
              class="cu antialiased outline-0 font-['Kumbh_Sans'] text-xs font-normal text-left w-full px-[14px] py-3 text-[rgba(51,51,51,1)] bg-[rgba(242,242,242,1)] border border-solid border-[rgba(189,189,189,1)]"
              type="email"
              id="contact-us-email"
              name="email"
              placeholder="Email"
              required
            />
            <span class="error-message text-xs text-red-500 antialiased hidden absolute -bottom-[15px] left-0" id="contact-us-email-error-message"
              >Please enter a valid email address.</span
            >
          </div>
          <div class="phone bg-[rgba(242,242,242,1)] row-start-3 row-end-4 col-[span_2]">
            <!-- <label for="phone">Phone Number:</label> -->
            <input
              class="cu antialiased outline-0 font-['Kumbh_Sans'] text-xs font-normal text-left w-full px-[14px] py-3 text-[rgba(51,51,51,1)] bg-[rgba(242,242,242,1)] border border-solid border-[rgba(189,189,189,1)]"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              required
            />
          </div>
          <div class="message bg-[rgba(242,242,242,1)] row-start-4 row-end-5 col-[span_2]">
            <!-- <label for="message">Message:</label> -->
            <textarea
              class="cutxt antialiased outline-0 font-['Kumbh_Sans'] text-xs font-normal text-left w-full px-[14px] py-3 text-[rgba(51,51,51,1)] bg-[rgba(242,242,242,1)] border border-solid border-[rgba(189,189,189,1)]"
              id="message"
              name="message"
              placeholder="Message"
              rows="3"
              required
            ></textarea>
          </div>
          <button class="row-start-5 row-end-6 col-[span_2] px-[10px] py-3 text-[rgba(255,255,255,1)] bg-[rgba(63,123,255,1)] border border-solid border-[rgba(63,123,255,1)] rounded-[5px] font-['Kumbh_Sans'] font-medium text-base"
            onclick="emailValidation('contact-us-email', 'contact-us-email-error-message')"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
      <!-- <div class="contact-ph">
        <img src="./assets/images/abt-us-image.png" alt="product photo" />
      </div> -->
    </section>`,
    image: "./assets/sections-screenshots/contact-us.png",
  },
  
  {
    title: "newsletter",
    html: `    <section id="newsletter-container" class="bg-[rgba(48,41,41,1)] mt-20 ">
      <div class="newsletter-container container mx-auto py-10 px-[3%]">
        <div class="newsletter flex gap-4 items-center w-full h-full max-w-[502px] m-auto justify-center flex-wrap" id="newsletter">
          <h2 class="font-['Kumbh_Sans'] text-sm sm:text-base md:text-lg font-medium leading-normal text-left text-[rgba(255,255,255,1)]">Newsletter</h2>
          <form class="newsletter-form relative flex justify-between w-full max-w-[200px] sm:max-w-[250px] h-9 md:h-10 bg-[rgba(255,255,255,1)] rounded-[50px]" method="">
            <input
            class="bg-[rgba(255,_255,_255,_1)] border-[none] rounded-[50px] w-full h-full max-w-full self-center p-[2%] pl-5 outline-0 font-['Kumbh_Sans'] text-sm font-medium leading-normal text-left text-[rgba(0,0,0,1)]"
              id="email"
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <span class="error-message text-xs antialiased text-red-500 hidden absolute -bottom-5 left-[10px]" id="error-message"
              >Please enter a valid email address.</span
            >
            <button class="bg-[rgba(255,255,255,1)] border-[none] rounded-full w-full h-full max-w-8 max-h-8 md:max-w-10 md:max-h-10 self-center pr-[2%]"
              onclick="emailValidation('email', 'error-message')"
              type="submit"
            >
              <img class="w-full h-full rounded-full""
                src="./assets/images/customised-send-btn-icon.svg"
                alt="action-icon"
              />
            </button>
          </form>
        </div>
      </div>
    </section>`,
    image: "./assets/sections-screenshots/newsletter.png",
  },
  
  {
    title: "footer",
    html: `    <section id="footer" class="flex flex-col bg-[rgba(0,0,0,1)]">
      <footer class="footer container mx-auto">
        <div class="footer-bottom flex gap-8 flex-col items-center justify-center px-0 py-[70px]">
          <ul class="flex flex-wrap gap-8 items-center justify-center">
            <li>
              <a class="antialiased font-['Kumbh_Sans'] text-xs sm:text-sm font-normal leading-normal text-center text-[rgba(255,255,255,1)]" href="./index.html">Home</a>
            </li>
            <li>
              <a class="antialiased font-['Kumbh_Sans'] text-xs sm:text-sm font-normal leading-normal text-center text-[rgba(255,255,255,1)]" href="./index.html#about-us">About Us</a>
            </li>
            <li>
              <a class="antialiased font-['Kumbh_Sans'] text-xs sm:text-sm font-normal leading-normal text-center text-[rgba(255,255,255,1)]" href="./index.html#testimonials">Users Experience</a>
            </li>
            <li>
              <a class="antialiased font-['Kumbh_Sans'] text-xs sm:text-sm font-normal leading-normal text-center text-[rgba(255,255,255,1)]" href="./index.html#contact-us">Contact Us</a>
            </li>
          </ul>

          <div class="social-footer flex gap-8 items-center justify-center">
            <a class="fb-footer" href="./error404.html"
              ><img class="w-[7.92px] h-[17px]"
                src="./assets/images/facebook-icon.svg"
                alt="social-media-icon"
            /></a>
            <a class="x-footer" href="./error404.html"
              ><img class="w-[17px] h-[13.81px]"
                src="./assets/images/twitter-icon.svg"
                alt="social-media-icon"
            /></a>
            <a class="utube-footer" href="./error404.html"
              ><img class="w-[14.06px] h-[17px]"
                src="./assets/images/youtube-icon.svg"
                alt="social-media-icon"
            /></a>
          </div>

          <p class="copyright-footer font-['Kumbh_Sans'] text-xs font-normal leading-normal text-center text-[rgba(255,255,255,1)]">© Copyright 2024 - Wivali AI</p>
        </div>
      </footer>
    </section>`,
    image: "./assets/sections-screenshots/footer.png",
  },
  
  {
    title: "error404",
    html: `    <section
      id="error404"
      class="h-screen flex flex-col items-center justify-center"
    >
      <div
        class="error404 pt-[80px] pb-[20px] flex flex-col justify-center w-full h-full max-w-[540px] max-h-[540px]"
      >
        <img
          class="w-auto h-auto max-w-full max-h-full"
          src="./assets/images/error404-photo.png"
          alt="error404-photo"
        />
        <a
          class="p-2 no-underline text-[rgba(51,_51,_51,_1)] font-['Kumbh_Sans'] text-sm md:text-base font-normal leading-normal text-center whitespace-nowrap flex justify-center items-center"
          href="./index.html"
          ><img
            class="w-[14px] h-[11.19px] md:w-[18.41px] md:h-[14.71px]"
            src="./assets/images/back-vector.png"
            alt="back-to-home-sign"
          />Return to home</a
        >
      </div>
    </section>`,
    image: "./assets/sections-screenshots/error404.png",
  }
];
