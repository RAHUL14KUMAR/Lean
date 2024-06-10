import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const people = [
  { id: 1, name: 'select' },
  { id: 2, name: 'Concept cards' },
  { id: 3, name: 'interview questions' },
  { id: 4, name: 'practice questions' },
  { id: 5, name: 'quizes' },
]

export default function Example() {
  const [selected, setSelected] = useState(people[0])

  return (
    <div className="w-[500px] bg-[#E0E0E0] my-2 focus:outline-none text-black text-base px-3 py-2 rounded-md">
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton
          className=
            'relative block w-full rounded-lg bg-[#E0E0E0] py-1.5  text-black text-base text-left' 
        >
          {selected.name}
          <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 bg-black rounded-full"
            aria-hidden="false"
          />
        </ListboxButton>
        <Transition leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <ListboxOptions
            anchor="bottom"
          >
            {people.map((person) => (
              <ListboxOption
                key={person.name}
                value={person}
                className="flex items-center gap-2 p-2 px-3 z-10 bg-[#E0E0E0] w-[281px] border-b-2 border-b-black border-black hover:cursor-pointer text-black"
              >
                <CheckIcon className="invisible size-4 fill-black group-data-[selected]:visible" />
                <div className="text-sm text-black p-2">{person.name}</div>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Transition>
      </Listbox>
    </div>
  )
}
