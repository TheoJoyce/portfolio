import React from 'react'

type LinkedInProps = {
    className?: string
}

const LinkedIn = ({ className = 'w-8' }: LinkedInProps) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.6 21.6">
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path
                        id="Path_2520"
                        data-name="Path 2520"
                        style={{ fill: '#0a66c1' }}
                        d="M18.41,18.41h-3.2v-5c0-1.19,0-2.73-1.67-2.73s-1.92,1.3-1.92,2.65v5.1H8.42V8.1h3.07V9.51h0a3.4,3.4,0,0,1,3-1.67c3.24,0,3.84,2.14,3.84,4.91ZM4.81,6.69A1.86,1.86,0,1,1,6.66,4.83,1.86,1.86,0,0,1,4.81,6.69h0m1.6,11.72H3.2V8.1H6.41ZM20,0H1.59A1.57,1.57,0,0,0,0,1.56V20A1.57,1.57,0,0,0,1.59,21.6H20A1.57,1.57,0,0,0,21.6,20V1.56A1.58,1.58,0,0,0,20,0"
                    />
                </g>
            </g>
        </svg>
    )
}

export default LinkedIn
