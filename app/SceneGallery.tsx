"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Scene = { number: string; title: string; text: string; image: string; alt: string };
type Labels = {
  open: string;
  view: string;
  dialog: string;
  close: string;
  previous: string;
  next: string;
  routeKicker: string;
  routeTitle: string;
  routeText: string;
};

export default function SceneGallery({ scenes, labels }: { scenes: Scene[]; labels: Labels }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  const showPrevious = useCallback(() => setActiveIndex((current) => current === null ? null : (current - 1 + scenes.length) % scenes.length), [scenes.length]);
  const showNext = useCallback(() => setActiveIndex((current) => current === null ? null : (current + 1) % scenes.length), [scenes.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, showNext, showPrevious]);

  const activeScene = activeIndex === null ? null : scenes[activeIndex];

  return (
    <>
      <div className="scene-list">
        {scenes.map((scene, index) => (
          <article key={scene.number}>
            <span>{scene.number}</span>
            <button className="scene-thumbnail" type="button" onClick={() => setActiveIndex(index)} aria-label={`${labels.open}: ${scene.title}`}>
              <img src={scene.image} alt={scene.alt} loading="lazy" /><span className="thumbnail-cue" aria-hidden="true">{labels.view}</span>
            </button>
            <div><h3>{scene.title}</h3><p>{scene.text}</p></div>
          </article>
        ))}
        <aside className="route-note"><p className="section-kicker">{labels.routeKicker}</p><h3>{labels.routeTitle}</h3><p>{labels.routeText}</p></aside>
      </div>

      {activeScene && activeIndex !== null && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={labels.dialog} onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveIndex(null); }}>
          <div className="gallery-panel" onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }} onTouchEnd={(event) => {
            if (touchStartX.current === null) return;
            const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
            const distance = endX - touchStartX.current;
            touchStartX.current = null;
            if (Math.abs(distance) < 50) return;
            if (distance > 0) showPrevious(); else showNext();
          }}>
            <div className="gallery-topbar"><p><span>{activeScene.number}</span> {activeScene.title}</p><p className="gallery-counter">{activeIndex + 1} / {scenes.length}</p><button ref={closeButtonRef} className="gallery-close" type="button" onClick={() => setActiveIndex(null)} aria-label={labels.close}>×</button></div>
            <div className="gallery-stage"><button className="gallery-arrow gallery-previous" type="button" onClick={showPrevious} aria-label={labels.previous}>‹</button><img src={activeScene.image} alt={activeScene.alt} /><button className="gallery-arrow gallery-next" type="button" onClick={showNext} aria-label={labels.next}>›</button></div>
            <p className="gallery-caption">{activeScene.text}</p>
          </div>
        </div>
      )}
    </>
  );
}
