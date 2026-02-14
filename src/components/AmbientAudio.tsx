'use client';

import { useState, useRef, useEffect } from 'react';

/**
 * Ambient audio - shows prompt to enable sound (browsers block autoplay).
 * Once user clicks, music plays and toggle remains for pause/resume.
 */
export default function AmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('/ambient.mp3');
    audio.loop = true;
    audio.volume = 0.3;

    const handleCanPlay = () => setIsLoaded(true);
    const handleError = () => setIsLoaded(false);

    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('error', handleError);

    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('error', handleError);
      audioRef.current = null;
    };
  }, []);

  const startAudio = () => {
    if (!audioRef.current || !isLoaded) return;
    audioRef.current.play().then(() => {
      setIsPlaying(true);
      setShowPrompt(false);
    }).catch(() => {});
  };

  const pause = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const toggle = () => {
    if (isPlaying) pause();
    else startAudio();
  };

  return (
    <>
      {showPrompt && isLoaded && (
        <button
          onClick={startAudio}
          className="fixed bottom-6 left-6 z-50 px-4 py-2.5 bg-[#141414]/95 border border-[#c9a227]/50 rounded-full text-[#c9a227] text-sm uppercase tracking-wider hover:bg-[#c9a227]/10 transition-colors"
        >
          Click to enable sound
        </button>
      )}

      {(!showPrompt || isPlaying) && (
        <button
          onClick={toggle}
          className="fixed bottom-6 left-6 z-40 p-3 bg-[#141414]/90 border border-zinc-700/50 rounded-full text-zinc-400 hover:text-[#c9a227] hover:border-[#c9a227]/50 transition-colors"
          aria-label={isPlaying ? 'Pause ambient sound' : 'Play ambient sound'}
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      )}
    </>
  );
}
