"use client";

import { useRef, useState } from "react";
import { Play, Pause, Volume2 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatTime } from "@/lib/utils";

interface AudioPlayerProps {
  title: string;
  description?: string;
  audioPath: string;
  compact?: boolean;
  progressColor?: string;
}

export const AudioPlayer = ({
  title,
  description,
  audioPath,
  compact = false,
  progressColor = "bg-primary"
}: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
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
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const clickTime = (clickX / width) * duration;
      audioRef.current.currentTime = clickTime;
      setCurrentTime(clickTime);
    }
  };

  if (compact) {
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
            className={`rounded-full w-10 h-10 ml-3 flex-shrink-0 bg-muted hover:bg-muted/80 border-2`}
            style={{ 
              borderColor: progressColor === "bg-red-500" ? "#ef4444" : 
                          progressColor === "bg-yellow-500" ? "#eab308" : 
                          progressColor === "bg-blue-500" ? "#3b82f6" : "#6366f1",
              color: progressColor === "bg-red-500" ? "#ef4444" : 
                     progressColor === "bg-yellow-500" ? "#eab308" : 
                     progressColor === "bg-blue-500" ? "#3b82f6" : "#6366f1"
            }}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Audio Progress Bar */}
        <div
          className="w-full bg-muted rounded-full h-1.5 cursor-pointer relative"
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
          src={audioPath}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
          preload="metadata"
        />
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-playfair text-2xl flex items-center gap-3">
          <Volume2 className="h-6 w-6 text-primary" />
          Reproductor de Audio
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-muted/30 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold">
                {title}
              </h3>
              {description && (
                <p className="text-sm text-muted-foreground">
                  {description}
                </p>
              )}
            </div>
            <Button
              size="lg"
              onClick={togglePlayback}
              className={`rounded-full w-14 h-14 bg-muted hover:bg-muted/80 border-2`}
              style={{ 
                borderColor: progressColor === "bg-red-500" ? "#ef4444" : 
                            progressColor === "bg-yellow-500" ? "#eab308" : 
                            progressColor === "bg-blue-500" ? "#3b82f6" : "#6366f1",
                color: progressColor === "bg-red-500" ? "#ef4444" : 
                       progressColor === "bg-yellow-500" ? "#eab308" : 
                       progressColor === "bg-blue-500" ? "#3b82f6" : "#6366f1"
              }}
            >
              {isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Audio Progress Bar */}
          <div
            className="w-full bg-muted rounded-full h-2 cursor-pointer relative"
            onClick={handleProgressClick}
          >
            <div
              className={`${progressColor} h-2 rounded-full transition-all duration-300`}
              style={{
                width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`,
              }}
            />
          </div>

          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>

          {/* Hidden audio element */}
          <audio
            ref={audioRef}
            src={audioPath}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={handleEnded}
            preload="metadata"
          />
        </div>
      </CardContent>
    </Card>
  );
};
