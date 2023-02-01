import React from 'react'

const BedIcon = () => {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width={24} height={24} fill="url(#pattern0)" />
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
                    <use xlinkHref="#image0_556_395" transform="scale(0.00195312)" />
                </pattern>
                <image id="image0_556_395" width={512} height={512} xlinkHref="data:image/png;base64,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J+7v3j3uilF51KxZVe8C1n1pk7i1dvq551a9AwCA1kUAqFjXfxv0+JQT/vSnDX/f7ryGs3v1SsPTf8aSUaM8NBD4ABbGgAceePrwdqPTX268seoxAAC0LgJAK/HpSf0HNE9aurRby+CTJ9989tm1CfWe9Yv33jtujePz1TffXPU+oPVKPeJX8erbb0dOx9Ymfu1r/fv379/cvGJF1bsAAGhdBIBWquubQydOffQPf+h+1pC3p2x22GH1LdLY/PuePdNlMTMunjYtDY+XY4kv8KFo71wplDvmnvG7fv269xjcrnnSnDlVzwIAoHUSANYRKx/m1e2aIZdO3uGIIxqOqV9b2/DjH0+PRfv4yciR8et0Vrw9e3a0xHXRN+eq9wJrUI7vRdvHH6+PjI75+/vt133+0G9OXnrrrVXPAgCgdWtT9QA+mC4jhs1ubn7hhYhojOaVD/s699z7J1z9x8aNO3Ro+GGb3fMWX/hCPiW1q4/t2TN9MV+Rlu62W749NottdtkldY+j4t+32Sa3xGkxrY1/B9C6dMs/W7YschySvvH003FTnBlvz56d5sfHY8PJk5/+Yrt/ra2YPLl/j/79m+e5EggAgPcntbQ0NfUt+RXj4emqfMGUKd1bBt89pVPfvlXPWdvuylfnYbl9+833y999q3HTTZdv1q7zirM23bTqXVCSdmMi2o957bWV3391j20GvjB+4cID0gHp12n58qr3AQCwfvDKb+EOSEena9Pixf/1vXe+nfTnP1e9C4rytxfvD4rrqx4FAMD6xjMAAAAAoAACAAAAABRAAAAAAIACCAAAAABQAAEAAAAACiAAAAAAQAEEAAAAACiAAAAAAAAFEAAAAACgAKmlpampb9+cqx4CAAAARESk4XHgW2/FjPyT/I3589M5aUQ67ckn67fFkrTZtGkbXF9/ZsWiqVP3umhoh6kXvvzy+/6sAgAAAACsQ+6P9vniN99My/N+6ewf/vDto5Zdu+xr55+/71bHnj5t34UL3+uXuQUAAAAA1iU9Y3E6deONc690R7w2cuSGR21watt6S8vMkeM6Njbusst7/TIBAAAAANZheUxMiEt23jkdmQ9b8c8zZrS0XPPSkad16vTXHycAAAAAwPogxX7p/I9+NM5puKB25rRpM/581fmHz9h005U/LQAAAADA+uR70SUdv/vuG97Qdljba04/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" />
            </defs>
        </svg>

    )
}

export default BedIcon