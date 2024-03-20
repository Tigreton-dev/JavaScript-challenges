import React from 'react';
import Link from 'next/link';
import { Listbox, ListboxItem, ListboxSection, Chip } from '@nextui-org/react';
import { RoundedErrorIcon } from '../../helpers/Icons';
import { useRouter } from 'next/navigation';

export default function ChallengeList({ list, category, onClose }) {
    const router = useRouter();

    const ChipColor = (tagName: string) => {
        let color = '#1976d2';
        if (tagName === 'Easy') color = 'success';
        if (tagName === 'Medium') color = 'warning';
        if (tagName === 'Hard') color = 'danger';
        if (tagName === 'Extreme Hard') color = 'default';
        return color;
    };

    const titleToRef = title => {
        return title
            .replace(/\s+/g, '') // remove spaces
            .replace(/^./, match => match.toLowerCase()); // replace first letter to lowercase
    };

    return (
        <div className="w-full">
            <Listbox variant="faded" aria-label="Listbox menu with sections">
                <ListboxSection>
                    {list !== undefined &&
                        list.map((challenge, index) => {
                            return (
                                <ListboxItem
                                    aria-label="Listbox item"
                                    key={challenge}
                                    description={`${category} base algorithm`}
                                    onClick={() => router.push(`/challenge/${titleToRef(challenge[0])}`)}
                                    startContent={
                                        <RoundedErrorIcon
                                            size="2.3rem"
                                            className="text-xl text-default-500 pointer-events-none flex-shrink-0"
                                        />
                                    }
                                    endContent={
                                        <Chip color={ChipColor(challenge[1])} variant="bordered" size="sm">
                                            {challenge[1]}
                                        </Chip>
                                    }
                                >
                                    {`${index}. ${challenge[0]}`}
                                </ListboxItem>
                            );
                        })}
                </ListboxSection>
            </Listbox>
        </div>
    );
}
