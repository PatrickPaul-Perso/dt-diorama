"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Scene = {
  number: string;
  title: string;
  text: string;
  image: string;
  alt: string;
};

export default function SceneGallery({ scenes }: { scenes: Scene[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + scenes.length) % scenes.length,
    );
  }, [scenes.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % scenes.length,
    );
  }, [scenes.length]);

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
            <button
              className="scene-thumbnail"
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Open full-size image: ${scene.title}`}
            >
              <img src={scene.image} alt={scene.alt} loading="lazy" />
              <span className="thumbnail-cue" aria-hidden="true">View</span>
            </button>
            <div><h3>{scene.title}</h3><p>{scene.text}</p></div>
          </article>
        ))}
        <aside className="route-note">
          <p className="section-kicker">Railway operation</p>
          <h3>A two-level route built for varied movement.</h3>
          <p>
            The network follows a figure-eight-like arrangement with a large
            loop, passing tracks near the passenger station and grain elevator,
            a descent beneath the hotel, and a switching yard beside the port.
            Its last verified operation supported both trains across the layout.
          </p>
        </aside>
      </div>

      {activeScene && activeIndex !== null && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Diorama scene gallery"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveIndex(null);
          }}
        >
          <div
            className="gallery-panel"
            onTouchStart={(event) => {
              touchStartX.current = event.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              if (touchStartX.current === null) return;
              const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
              const distance = endX - touchStartX.current;
              touchStartX.current = null;
              if (Math.abs(distance) < 50) return;
              if (distance > 0) showPrevious();
              else showNext();
            }}
          >
            <div className="gallery-topbar">
              <p><span>{activeScene.number}</span> {activeScene.title}</p>
              <p className="gallery-counter">{activeIndex + 1} / {scenes.length}</p>
              <button
                ref={closeButtonRef}
                className="gallery-close"
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label="Close image gallery"
              >
                ×
              </button>
            </div>
            <div className="gallery-stage">
              <button className="gallery-arrow gallery-previous" type="button" onClick={showPrevious} aria-label="Previous image">‹</button>
              <img src={activeScene.image} alt={activeScene.alt} />
              <button className="gallery-arrow gallery-next" type="button" onClick={showNext} aria-label="Next image">›</button>
            </div>
            <p className="gallery-caption">{activeScene.text}</p>
          </div>
        </div>
      )}
    </>
  );
}
