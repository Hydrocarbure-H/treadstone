import Card from './Card'

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl. eget ultricies nisl nisl eget nisl. eget ultricies nisl nisl eget nisl.";
const lorem2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl";
const lorem3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl.";
const lorem4 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, eget ultricies nisl nisl eget nisl.eget ultricies nisl nisl eget nisl.eget ultricies nisl nisl eget nisl.eget ultricies nisl nisl eget nisl.eget ultricies nisl nisl eget nisl.";

const title = "Treadstone";
const subtitle = "A new kind of intelligence";
function Window() {
    return <div className="window"><Card loremValue={lorem} /><Card loremValue={lorem2} /><Card loremValue={lorem} /><Card loremValue={lorem3} /><Card loremValue={lorem} /><Card loremValue={lorem4} /><Card loremValue={lorem} /><Card loremValue={lorem} /><Card loremValue={lorem2} /><Card loremValue={lorem3} /><Card loremValue={lorem4} /><Card loremValue={lorem} /></div>
}

export default Window