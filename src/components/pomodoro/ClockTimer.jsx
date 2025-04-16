function ClockTimer({val}) {
    return (
        <span className="countdown font-mono text-[48px] mr-[1.5rem]">
            <span className="text-[{48}px]" style={{ "--value": val } /* as React.CSSProperties */} aria-live="polite" aria-label={val}></span>
        </span>
    );
}

export default ClockTimer;