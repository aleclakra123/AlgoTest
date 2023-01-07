import {IntervalType, OptionType, PositionType, SegmentType, StrikeCriteria} from  "../enums";


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


