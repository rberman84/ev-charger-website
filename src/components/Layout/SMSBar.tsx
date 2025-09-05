const SMSBar = () => {
  return (
    <>
      <div id="smsbar" className="fixed left-0 right-0 bottom-0 bg-electric-green p-3 z-[9999] text-center md:max-w-[900px] md:mx-auto md:left-1/2 md:transform md:-translate-x-1/2 md:rounded-t-lg">
        <a 
          href="sms:+15163614068?&body=Hi, I need an EV charger in [Town]" 
          className="text-white no-underline font-bold hover:text-white/90 transition-colors"
        >
          Text us for a fast quote
        </a>
      </div>
    </>
  );
};

export default SMSBar;