"use-client"
import * as React from "react"
import { IoIosSearch } from "react-icons/io";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "../ui/button";
const SearchBar = () => {


    const countries = [
        { title: 'United States', value: 'unitedstates' },
        { title: 'Canada', value: 'canada' },
        { title: 'United Kingdom', value: 'unitedkingdom' },
        { title: 'Germany', value: 'germany' },
        { title: 'Japan', value: 'japan' },
        { title: 'Australia', value: 'australia' }
    ];


    const city = [
        { title: 'New York', value: 'newyork' },
        { title: 'Silicon Valley', value: 'siliconvalley' },
        { title: 'San Francisco', value: 'sanfrancisco' },
        { title: 'Colorado', value: 'colorado' },
        { title: 'Austin Texas', value: 'austintexas' }
    ]

    const houseTypes = [
        { title: 'Single Family Home', value: 'singlefamilyhome' },
        { title: 'Apartment', value: 'apartment' },
        { title: 'Townhouse', value: 'townhouse' },
        { title: 'Condo', value: 'condo' },
        { title: 'Cottage', value: 'cottage' },
    ];
    const priceRanges = [
        { title: '$10,000 - $50,000', value: '10000-50000' },
        { title: '$50,000 - $100,000', value: '50000-100000' },
        { title: '$100,000 - $250,000', value: '100000-250000' },
        { title: '$250,000 - $500,000', value: '250000-500000' },
        { title: '$500,000 - $1,000,000', value: '500000-1000000' },
        { title: 'Above $1,000,000', value: '1000000+' }
        // Add more ranges as needed
    ];


    return (
        <div className="bg-white px-4 py-4 w-full rounded-2xl mt-4">
            <div className="flex gap-x-4">
                <p className="base-semibold">Buy</p>
                <p className="base-medium text-zinc-500">Rent</p>
            </div>
            <div className="pt-4 items-end flex justify-between flex-wrap gap-6">
                {/* Country */}
                <div>
                    <p className="base-normal text-gray-500 pb-2"> Country</p>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a Country" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Select Country</SelectLabel>
                                {
                                    countries.map((value, i) => <SelectItem key={i} value={value.value}>{value.title}</SelectItem>)
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                {/* Location */}
                <div>
                    <p className="base-normal text-gray-500 pb-2"> Location</p>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a Location" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Select Location</SelectLabel>
                                {
                                    city.map((value, i) => <SelectItem key={i} value={value.value}>{value.title}</SelectItem>)
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                {/* Property Type */}
                <div>
                    <p className="base-normal text-gray-500 pb-2"> Property Type</p>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a Property Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Select Property Type</SelectLabel>
                                {
                                    houseTypes.map((value, i) => <SelectItem key={i} value={value.value}>{value.title}</SelectItem>)
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                {/* Price Range */}
                <div>
                    <p className="base-normal text-gray-500 pb-2"> Price Range</p>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a Price Range" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Select Price Range</SelectLabel>
                                {
                                    priceRanges.map((value, i) => <SelectItem key={i} value={value.value}>{value.title}</SelectItem>)
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                {/* Button */}
                <div>
                    <Button > <IoIosSearch className="mr-2 h-4 w-4" />  Search</Button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;