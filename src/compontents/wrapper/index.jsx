import styles from './styles.module.scss';

export const Wrapper = ({children}) => (
    <div className={styles.wrapper}>
        <div className={styles.wrapperContent}>
            {children}
        </div>
        <svg className={styles.wrapperSvg} width="100%" height="100%">
            <rect width="100%" height="100%" fill="none" filter={`url(#noiseFilter)`} clipPath="url(#clip)" />
            <defs>
                <clipPath id="clip">
                    <rect width="100%" height="100%" />
                </clipPath>
                <filter id="noiseFilter"
                    x="0" y="0"
                    width="110%" height="110%"
                    filterUnits="objectBoundingBox">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur" in="SourceGraphic" />
                    <feTurbulence type="fractalNoise" baseFrequency="1.6666666269302368 1.6666666269302368" numOctaves="3" seed="4986" />
                    <feDisplacementMap in="effect1_foregroundBlur" scale="4" xChannelSelector="R" yChannelSelector="G" result="displacedImage" width="105%" height="105%" />
                    <feMerge>
                        <feMergeNode in="displacedImage" />
                    </feMerge>
                </filter>
            </defs>
        </svg>
    </div>
)