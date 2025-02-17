const BackgroundVideo = () => {
    return (
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/homebg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-zinc-50/5" />
      </div>
    );
  };
  
  export default BackgroundVideo;
  