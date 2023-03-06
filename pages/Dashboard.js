import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import Link from "next/link";
import styles from "../styles/Dashboard.module.css";
import { useState } from "react";
import { ImSuperscript } from "react-icons/im";
import Quadratic from "@/components/Quadratic";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function Dashboard() {
  const [firstState, setFirstState] = useState(true);
  const [showQuad, setShowQuad] = useState(false);
  const fixed = (
    <div className={styles.first}>
      Calcul-
      <ImSuperscript />
    </div>
  );
  return (
    <div className={styles.dashboardContainer}>
      <Header />
      <div className={styles.main}>
        <SideMenu quad={setShowQuad} normal={setFirstState} />

        <SkeletonTheme baseColor="#ccc" highlightColor="#444">
          <div className={styles.solution}>
            {firstState && fixed}
            {showQuad && <Quadratic />}
          </div>
        </SkeletonTheme>
      </div>
    </div>
  );
}
