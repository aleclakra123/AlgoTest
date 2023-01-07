import {IntervalType, OptionType, PositionType, SegmentType, StrikeCriteria} from  "../enums";


export const optionTypes = [
    {type: "Call", value: OptionType.CALL },
    {type: "PUT", value: OptionType.PUT},
];

export const intervalTypes = [
    {type: "Weekly", value: IntervalType.WEEKLY },
    {type: "Monthly", value: IntervalType.MONTHLY},
];

export const segmentTypes = [
    {type: "Futures", value: SegmentType.FUTURES },
    {type: "OPTIONS", value: SegmentType.OPTIONS},
];

export const positionTypes = [
    {type: "SELL", value: PositionType.SELL },
    {type: "BUY", value: PositionType.BUY},
];

export const strikeCriteriaTypes = [
    {type: "Strike Type", value: StrikeCriteria.STRIKE_TYPE },
    {type: "Premium Range", value: StrikeCriteria.PREMIUM_RANGE },
    {type: "Closest Premium", value: StrikeCriteria.CLOSEST_PREMIUM },
    {type: "Straddle Width", value: StrikeCriteria.STRADDLE_WIDTH },
];

