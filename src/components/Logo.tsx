import React from 'react'

interface IProps {
  showText?: boolean;
}
const Logo = ({ showText }: IProps) => {
  return (
    <div className='flex items-center'>

      <svg width="105" height="106" viewBox="0 0 109 110" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_dd_656_499)">
          <ellipse cx="54.4569" cy="41.0808" rx="26.1483" ry="26.637" fill="#218D82" />
        </g>
        <ellipse cx="3.66565" cy="3.91002" rx="3.66565" ry="3.91002" transform="matrix(1 0 0 -1 36.1285 31.0614)" fill="#2B4360" fill-opacity="0.25" />
        <ellipse cx="2.93252" cy="3.17689" rx="2.93252" ry="3.17689" transform="matrix(1 0 0 -1 50.3029 21.2863)" fill="#2B4360" fill-opacity="0.25" />
        <circle cx="0.977506" cy="0.977506" r="0.977506" transform="matrix(1 0 0 -1 50.3029 24.2188)" fill="#E29578" fill-opacity="0.25" />
        <circle cx="0.977506" cy="0.977506" r="0.977506" transform="matrix(1 0 0 -1 57.1453 60.8753)" fill="#E29578" fill-opacity="0.25" />
        <circle cx="0.488753" cy="0.488753" r="0.488753" transform="matrix(1 0 0 -1 43.9489 23.2413)" fill="#E29578" fill-opacity="0.25" />
        <circle cx="1.95501" cy="1.95501" r="1.95501" transform="matrix(1 0 0 -1 31.73 15.91)" fill="#2B4360" fill-opacity="0.25" />
        <circle cx="5.62066" cy="5.62066" r="5.62066" transform="matrix(1 0 0 -1 46.8815 59.8978)" fill="#2B4360" fill-opacity="0.25" />
        <ellipse cx="1.95501" cy="1.71063" rx="1.95501" ry="1.71063" transform="matrix(1 0 0 -1 41.0162 62.3416)" fill="#2B4360" fill-opacity="0.25" />
        <circle cx="0.488753" cy="0.488753" r="0.488753" transform="matrix(1 0 0 -1 32.7075 20.3088)" fill="#E29578" fill-opacity="0.25" />
        <ellipse cx="3.66565" cy="3.91002" rx="3.66565" ry="3.91002" transform="matrix(1 0 0 -1 20.9775 29.1064)" fill="#2B4360" fill-opacity="0.25" />
        <ellipse cx="3.42127" cy="3.17689" rx="3.42127" ry="3.17689" transform="matrix(1 0 0 -1 46.8815 41.8139)" fill="#2B4360" fill-opacity="0.25" />
        <circle cx="0.977506" cy="0.977506" r="0.977506" transform="matrix(1 0 0 -1 23.4214 33.0164)" fill="#2B4360" fill-opacity="0.25" />
        <circle cx="0.488753" cy="0.488753" r="0.488753" transform="matrix(1 0 0 -1 53.2355 42.3027)" fill="#E29578" fill-opacity="0.25" />
        <circle cx="0.488753" cy="0.488753" r="0.488753" transform="matrix(1 0 0 -1 20 30.0838)" fill="#E29578" fill-opacity="0.25" />
        <circle cx="0.977506" cy="0.977506" r="0.977506" transform="matrix(1 0 0 -1 32.2188 48.6564)" fill="#E29578" fill-opacity="0.25" />
        <line x1="90.5" y1="12.0009" x2="90.3916" y2="74.0801" stroke="#2B4360" />
        <defs>
          <filter id="filter0_dd_656_499" x="0.308594" y="0.443726" width="108.297" height="109.274" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="10" />
            <feGaussianBlur stdDeviation="5" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.129412 0 0 0 0 0.552941 0 0 0 0 0.509804 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_656_499" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="14" />
            <feGaussianBlur stdDeviation="14" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.129412 0 0 0 0 0.552941 0 0 0 0 0.509804 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="effect1_dropShadow_656_499" result="effect2_dropShadow_656_499" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_656_499" result="shape" />
          </filter>
        </defs>
      </svg>
      {showText && <p className='uppercase pb-2 text-secondary-100 text-lg'>d-treat</p>}
    </div>

  )
}

export default Logo