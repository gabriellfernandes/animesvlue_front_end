import * as React from "react";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import { IconButton, Slider, Stack, styled, Typography } from "@mui/material";
import { ReactPlayerProps } from "react-player";
import { format } from "date-fns";
import {
  FullscreenRounded,
  VolumeDownRounded,
  VolumeUpRounded,
} from "@mui/icons-material";
import screenfull from "screenfull";
import { findDOMNode } from "react-dom";
import { StyledPlayerControls, StyledSkipIntro } from "../styled";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { InfoAndEpisodeContext } from "../../../../contexts/animes/infoAndEpisodeContext";

const PlayerControls: React.FC<ReactPlayerProps> = (props) => {
  const { state, dispatch, wrapperRef, playerRef } = props;

  const handleSound = (_event: Event, newValue: number | number[]) => {
    dispatch({ type: "VOLUME", payload: newValue });
  };

  const handleFullscreen = () => {
    screenfull.toggle(findDOMNode(wrapperRef.current) as Element);
  };

  const handleSeek = (_event: Event, newValue: number | number[]) => {
    playerRef.current.seekTo(newValue as number);
  };

  const renderSeekSlider = () => {
    return (
      <Slider
        aria-label="Time"
        className={"video-player__slider video-player__slider--seek"}
        min={0}
        max={state.duration}
        step={0.01}
        value={state.progress.playedSeconds}
        onChange={handleSeek}
      />
    );
  };

  const renderPlayButton = () => {
    return (
      <IconButton onClick={() => dispatch({ type: "TOGGLE_PLAY" })}>
        {state.playing ? (
          <PauseRounded sx={{ fontSize: "2rem", color: "white" }} />
        ) : (
          <PlayArrowRounded sx={{ fontSize: "2rem", color: "white" }} />
        )}
      </IconButton>
    );
  };

  const renderSoundSlider = () => {
    return (
      <Stack
        spacing={2}
        direction="row"
        sx={{ mb: 1, px: 1 }}
        alignItems="center"
      >
        <VolumeDownRounded sx={{ fontSize: "1.5rem", color: "white" }} />
        <Slider
          aria-label="Volume"
          className={"video-player__slider video-player__slider--sound"}
          max={1}
          step={0.01}
          value={state.volume}
          onChange={handleSound}
        />
        <VolumeUpRounded sx={{ fontSize: "1.5rem", color: "white" }} />
      </Stack>
    );
  };

  const renderDurationText = () => {
    return (
      <Stack
        spacing={2}
        direction="row"
        sx={{ mb: 1, px: 1 }}
        alignItems="center"
      >
        <Typography variant="body2" color="white" className="timing_video">
          {format(new Date(state.progress.playedSeconds * 1000), "mm:ss")}
          {" / "}
          {format(new Date(state.duration * 1000), "mm:ss")}
        </Typography>
      </Stack>
    );
  };

  const renderFullscreenButton = () => {
    return (
      <IconButton onClick={handleFullscreen}>
        <FullscreenRounded sx={{ fontSize: "2rem", color: "white" }} />
      </IconButton>
    );
  };

  const [type, setType] = useState("intro");
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (
      state.progress.playedSeconds > 10 &&
      state.progress.playedSeconds < 90
    ) {
      setType("skip");
      setShowButton(true);
    } else if (
      state.progress.playedSeconds >=
      state.duration.toFixed(0) - 120
    ) {
      if (state.duration != 0) {
        setType("nextEp");
        setShowButton(true);
      }
    } else {
      setShowButton(false);
    }
  }, [state.progress.playedSeconds]);

  const navigate = useNavigate();
  const { nextEp, animeInfo } = useContext(InfoAndEpisodeContext);

  return (
    <>
      <StyledPlayerControls className={"video-player__controls"}>
        <Stack direction="row" alignItems="center">
          {renderSeekSlider()}
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            {renderPlayButton()} {renderSoundSlider()} {renderDurationText()}
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            {renderFullscreenButton()}
          </Stack>
        </Stack>
      </StyledPlayerControls>
      <StyledSkipIntro state={showButton}>
        {showButton && type === "skip" ? (
          <button
            className="video-player__overlay-button-skip-intro"
            onClick={(e: any) => {
              handleSeek(e, state.progress.playedSeconds + 90);
              setShowButton(false);
            }}
          >
            Pular Abertura
          </button>
        ) : (
          showButton &&
          nextEp != null && (
            <button
              className="video-player__overlay-button-skip-intro"
              onClick={() => {
                toast.success("Proximo episodio", {
                  autoClose: 2500,
                  pauseOnHover: false,
                });
                setShowButton(false);
                navigate(
                  `/anime/episode/${nextEp[0].video_id}/${animeInfo[0].id}`
                );
              }}
            >
              Proximo episodio
            </button>
          )
        )}
      </StyledSkipIntro>
    </>
  );
};

export default PlayerControls;
