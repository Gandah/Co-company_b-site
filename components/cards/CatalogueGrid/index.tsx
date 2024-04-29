"use client";
import { LayoutGrid } from "@/components/ui/Layout-grid";
import DetailCard from "@/components/cards/DetailCard";
import {
    House1,
    House2,
    House3,
    House4,
    House5
} from '../../../public/assets/images'

const CatalogueGrid = () => {
    return (
        <div className="h-full py-20 w-full">
            <LayoutGrid cards={cards} />
        </div>
    )
}


export const cards = [
    {
        id: 1,
        content: <DetailCard />,
        className: "md:col-span-2",
        thumbnail: House3,
    },
    {
        id: 2,
        content: <DetailCard />,
        className: "col-span-1",
        thumbnail: House1,
    },
    {
        id: 3,
        content: <DetailCard />,
        className: "col-span-1",
        thumbnail: House2,
    },
    {
        id: 4,
        content: <DetailCard />,
        className: "md:col-span-2",
        thumbnail: House5,
    },
];

export default CatalogueGrid;