import { useState, useRef, useEffect } from "react";

const AudioPlayer = ({
  sound,
  actionToBePerformed,
  clearActionToBePerformed,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement && actionToBePerformed) {
      console.log("actionToBePerformed", actionToBePerformed);
      if (audioElement.paused) audioElement.play();
      else audioElement.pause();
      clearActionToBePerformed();
    }
  }, [actionToBePerformed]);

  return (
    <div>
      <audio
        id="audioPlayer"
        controls
        ref={audioRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={sound} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <p>
        <i>{isPlaying ? "Playing" : "Paused"}</i>
      </p>
    </div>
  );
};

export default AudioPlayer;
