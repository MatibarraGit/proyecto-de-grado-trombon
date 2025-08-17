"use client";

import { useRef, useState, useEffect } from "react";
import { Play, Pause, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatTime } from "@/lib/utils";

interface AudioPlayerProps {
  title: string;
  description?: string;
  audioPath: string;
  progressColor?: string;
}

export const AudioPlayer = ({
  title,
  description,
  audioPath,
  progressColor = "bg-primary"
}: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Resetear estados cuando cambia el audioPath
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = audioPath;
      audioRef.current.load();
    }
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
    setHasError(false);
  }, [audioPath]);

  const togglePlayback = () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // Si hay error, intentar recargar
        if (hasError) {
          setHasError(false);
          audioRef.current.load();
        }
        
        setIsLoading(true);
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              setIsLoading(false);
            })
            .catch((error) => {
              console.error("Error playing audio:", error);
              setHasError(true);
              setIsLoading(false);
            });
        }
      }
    } catch (error) {
      console.error("Error in togglePlayback:", error);
      setHasError(true);
      setIsLoading(false);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      setIsLoading(false);
      setHasError(false);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || duration <= 0) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const clickTime = (clickX / width) * duration;
    
    audioRef.current.currentTime = clickTime;
    setCurrentTime(clickTime);
  };

  const handleAudioError = () => {
    setHasError(true);
    setIsLoading(false);
    setIsPlaying(false);
  };

  const isButtonDisabled = isLoading;
  const buttonTitle = hasError ? 'Reintentar' : isPlaying ? 'Pausar' : 'Reproducir';

  return (
    <div className="bg-muted/30 rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm truncate">
            {title}
          </h4>
          {description && (
            <p className="text-xs text-muted-foreground truncate">
              {description}
            </p>
          )}
        </div>
        <Button
          size="sm"
          onClick={togglePlayback}
          disabled={isButtonDisabled}
          title={buttonTitle}
          className={`rounded-full w-10 h-10 ml-3 flex-shrink-0 bg-muted hover:bg-muted/80 border-2`}
          style={{ 
            borderColor: 
              progressColor === "bg-red-500" ? "#ef4444" : 
              progressColor === "bg-yellow-500" ? "#eab308" : 
              progressColor === "bg-blue-500" ? "#3b82f6" : "#6366f1",
            color: 
              progressColor === "bg-red-500" ? "#ef4444" : 
              progressColor === "bg-yellow-500" ? "#eab308" : 
              progressColor === "bg-blue-500" ? "#3b82f6" : "#6366f1"
          }}
        >
          {hasError ? (
            <AlertCircle className="h-4 w-4" />
          ) : isLoading ? (
            <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          ) : isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Audio Progress Bar */}
      <div
        className={`w-full bg-muted rounded-full h-1.5 cursor-pointer relative ${(isLoading || hasError) ? 'opacity-50' : ''}`}
        onClick={handleProgressClick}
      >
        <div
          className={`${progressColor} h-1.5 rounded-full transition-all duration-300`}
          style={{
            width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`,
          }}
        />
      </div>

      <div className="flex justify-between text-xs text-muted-foreground mt-1">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        onError={handleAudioError}
        preload="none"
      />
    </div>
  );
}