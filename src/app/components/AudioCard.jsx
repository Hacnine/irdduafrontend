"use client"

import Image from "next/image";
import React, { useState, useRef } from "react";
import { IoMdRepeat } from "react-icons/io";

const AudioCard = ({ audio }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState("00:00");
  const audioRef = useRef(null);

  // Function to format time as MM:SS
  const formatTime = (time) => {
    if (!time || isNaN(time)) return "00:00"; // Handle invalid time
    return new Date(time * 1000).toISOString().substr(14, 5);
  };

  // Toggle Play/Pause
  const togglePlayPause = () => {
    const audioElement = audioRef.current;

    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update progress bar and time
  const updateProgress = () => {
    const audioElement = audioRef.current;
    const currentTime = audioElement?.currentTime || 0;
    const totalDuration = audioElement?.duration || 0;

    setProgress((currentTime / totalDuration) * 100);
    setDuration(formatTime(totalDuration));
  };

  // Handle user clicking on the progress bar
  const handleProgressClick = (e) => {
    const audioElement = audioRef.current;
    const progressWidth = e.target.offsetWidth;
    const clickPosition = e.nativeEvent.offsetX;
    const newTime = (clickPosition / progressWidth) * audioElement.duration;
    audioElement.currentTime = newTime;
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg  ">
      <button
        onClick={togglePlayPause}
        className={`w-10 h-10 flex items-center justify-center rounded-full ${
          isPlaying ? "bg-green-500" : "bg-white"
        }`}
      >
        {isPlaying ? (
          <span className="text-white font-bold">||</span>
        ) : (
          <span className="text-white font-bold">
            <Image width={30} height={30} src="/icon/play.png" alt="Play" />
          </span>
        )}
      </button>

     {isPlaying? <>
      <div className="flex-1 mx-4" onClick={handleProgressClick}>
        <div className="relative h-2 bg-gray-300 rounded-full cursor-pointer">
          <div
            className="absolute top-0 left-0 h-2 bg-green-500 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
          <div
            className="absolute w-3 h-3 bg-green-500 rounded-full top-1/2 transform -translate-y-1/2"
            style={{ left: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="text-gray-600 text-sm">
        {audioRef.current
          ? new Date(audioRef.current.currentTime * 1000)
              .toISOString()
              .substr(14, 5)
          : "00:00"}{" "}
        / {duration}
      </div>

      <button
        className="ml-4 text-gray-600 hover:text-gray-800"
        onClick={() => {
          const audioElement = audioRef.current;
          audioElement.currentTime = 0;
          audioElement.play();
          setIsPlaying(true);
        }}
      >
        <IoMdRepeat/>
      </button>

     </>: null}
      <audio
        ref={audioRef}
        src={audio}
        onTimeUpdate={updateProgress}
        onLoadedMetadata={updateProgress} // Ensures the duration is set when loaded
        onEnded={() => setIsPlaying(false)}
      ></audio>
    </div>
  );
};

export default AudioCard;
