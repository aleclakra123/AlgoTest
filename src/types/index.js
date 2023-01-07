import {IntervalType, OptionType, PositionType, SegmentType, StrikeCriteria, StrikeType, TrailStopLossType, MomentumType} from  "../enums";

export const optionTypes = [
    {type: "Call", value: OptionType.CALL },
    {type: "Put", value: OptionType.PUT},
];

export const intervalTypes = [
    {type: "Weekly", value: IntervalType.WEEKLY },
    {type: "Monthly", value: IntervalType.MONTHLY},
];

export const segmentTypes = [
    {type: "Futures", value: SegmentType.FUTURES },
    {type: "Options", value: SegmentType.OPTIONS},
];

export const positionTypes = [
    {type: "Sell", value: PositionType.SELL },
    {type: "Buy", value: PositionType.BUY},
];

export const strikeCriteriaTypes = [
    {type: "Strike Type", value: StrikeCriteria.STRIKE_TYPE },
    {type: "Premium Range", value: StrikeCriteria.PREMIUM_RANGE },
    {type: "Closest Premium", value: StrikeCriteria.CLOSEST_PREMIUM },
    {type: "Straddle Width", value: StrikeCriteria.STRADDLE_WIDTH },
];

export const strikeTypes = [
    {
        "type": "ITM20",
        "value": StrikeType.ITM20
    },
    {
        "type": "ITM19",
        "value":  StrikeType.ITM19
    },
    {
        "type": "ITM18",
        "value":  StrikeType.ITM18
    },
    {
        "type": "ITM17",
        "value": StrikeType.ITM17
    },
    {
        "type": "ITM16",
        "value":StrikeType.ITM16
    },
    {
        "type": "ITM15",
        "value": StrikeType.ITM15
    },
    {
        "type": "ITM14",
        "value": StrikeType.ITM14
    },
    {
        "type": "ITM13",
        "value": StrikeType.ITM13
    },
    {
        "type": "ITM12",
        "value": StrikeType.ITM12
    },
    {
        "type": "ITM11",
        "value": StrikeType.ITM11
    },
    {
        "type": "ITM10",
        "value":StrikeType.ITM10
    },
    {
        "type": "ITM9",
        "value":StrikeType.ITM9
    },
    {
        "type": "ITM8",
        "value": StrikeType.ITM8
    },
    {
        "type": "ITM7",
        "value": StrikeType.ITM7
    },
    {
        "type": "ITM6",
        "value": StrikeType.ITM6
    },
    {
        "type": "ITM5",
        "value": StrikeType.ITM5
    },
    {
        "type": "ITM4",
        "value": StrikeType.ITM4
    },
    {
        "type": "ITM3",
        "value": StrikeType.ITM3
    },
    {
        "type": "ITM2",
        "value":  StrikeType.ITM2
    },
    {
        "type": "ITM1",
        "value": StrikeType.ITM1
    },
    {
        "type": "ATM",
        "value": StrikeType.ATM
    },
    {
        "type": "OTM20",
        "value": StrikeType.OTM20
    },
    {
        "type": "OTM19",
        "value": StrikeType.OTM19
    },
    {
        "type": "OTM18",
        "value": StrikeType.OTM18
    },
    {
        "type": "OTM17",
        "value": StrikeType.OTM17
    },
    {
        "type": "OTM16",
        "value": StrikeType.OTM16
    },
    {
        "type": "OTM15",
        "value": StrikeType.OTM15
    },
    {
        "type": "OTM14",
        "value": StrikeType.OTM14
    },
    {
        "type": "OTM13",
        "value": StrikeType.OTM13
    },
    {
        "type": "OTM12",
        "value": StrikeType.OTM12
    },
    {
        "type": "OTM11",
        "value": StrikeType.OTM11
    },
    {
        "type": "OTM10",
        "value": StrikeType.OTM10
    },
    {
        "type": "OTM9",
        "value": StrikeType.OTM9
    },
    {
        "type": "OTM8",
        "value": StrikeType.OTM8
    },
    {
        "type": "OTM7",
        "value": StrikeType.OTM7
    },
    {
        "type": "OTM6",
        "value": StrikeType.OTM6
    },
    {
        "type": "OTM5",
        "value": StrikeType.OTM5
    },
    {
        "type": "OTM4",
        "value": StrikeType.OTM4
    },
    {
        "type": "OTM3",
        "value": StrikeType.OTM3
    },
    {
        "type": "OTM2",
        "value": StrikeType.OTM2
    },
    {
        "type": "OTM1",
        "value": StrikeType.OTM1
    }
]

export const momentumTypes = [
    {type: "Points ↑", value: MomentumType.POINTS_UP},
    {type: "Points ↓", value: MomentumType.POINTS_DOWN},
    {type: "Percentage ↑", value: MomentumType.PERCENTAGE_UP},
    {type: "Percentage ↓", value: MomentumType.PERCENTAGE_DOWN},
    {type: "Underlying Points ↑", value: MomentumType.UNDERLYING_POINTS_UP},
    {type: "Underlying Points ↓", value: MomentumType.UNDERLYING_POINTS_DOWN},
    {type: "Underlying Percentage ↑", value: MomentumType.UNDERLYING_PERCENTAGE_UP},
    {type: "Underlying Percentage ↓", value: MomentumType.UNDERLYING_PERCENTAGE_DOWN},
]

export const trailStopLossTypes = [
    {type: "Points", value: TrailStopLossType.POINTS},
    {type: "Percentage", value: TrailStopLossType.PERCENTAGE}
]