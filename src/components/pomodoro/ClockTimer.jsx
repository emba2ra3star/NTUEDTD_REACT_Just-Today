function ClockTimer({val,textSize}) {
    return (
        <span className={`col-span-2 countdown font-mono text-[${textSize}px] mx-auto`}>
            <span className="text-[{48}px]" style={{ "--value": val } /* as React.CSSProperties */} aria-live="polite" aria-label={val}></span>
        </span>
    );
}

export default ClockTimer;