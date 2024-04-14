

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Selector() {
  return (
    <Select>
      <SelectTrigger className="min-w-[280px]">
        <SelectValue placeholder="Property Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Property Type</SelectLabel>
          <SelectItem value="penthouse">Penthouse</SelectItem>
          <SelectItem value="apartment">Apartment</SelectItem>
          <SelectItem value="bunglow">Bunglow</SelectItem>
          <SelectItem value="house">House</SelectItem>
          <SelectItem value="townhouse">TownHouse</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
