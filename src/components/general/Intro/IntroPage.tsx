import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import { motion, AnimatePresence } from "motion/react";

import "./IntroPage.css";

interface IntroProps {
  showIntro: boolean;
  setShowIntro: Dispatch<SetStateAction<boolean>>;
}

export const IntroPage: React.FC<IntroProps> = ({
  showIntro,
  setShowIntro,
}) => {
  //duration of intro screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  //skip animation
  const handleSkip = () => {
    setShowIntro(false);
  };

  return (
    <AnimatePresence>
      {showIntro ? (
        <motion.section
          className="intro-container"
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleSkip}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#1E201F",
            color: "#FCFCFE",
            zIndex: 50,
            cursor: "pointer",
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <motion.div
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "FCFCFE",
              }}
            ></motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              REY ABDUL
            </motion.span>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              style={{
                width: "50px",
                height: "1px",
                backgroundColor: "#FCFCFE",
                margin: "0.5rem 0",
              }}
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              レイ アブドゥル
            </motion.span>
          </motion.div>
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
};
