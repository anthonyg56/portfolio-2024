import { BreakPointCols, FlexMasonryOptions } from "@/lib/types";
import { useState } from "react";

type Props = FlexMasonryOptions

const defaultBreakpointCols: BreakPointCols = {
  "1500": 6,
  "1200": 5,
  "992": 4,
  "768": 3,
  "576": 2,
};

export default function FlexMasonry({
  breakpointCols = defaultBreakpointCols,
  responsive = true,
  numCols = responsive === true ? undefined : 4
}: Props) {
  const [_options, setOptions] = useState<FlexMasonryOptions>({
    numCols: numCols,
    responsive: responsive,
    breakpointCols: breakpointCols,
  });

  return (
    <div>

    </div>
  )
}