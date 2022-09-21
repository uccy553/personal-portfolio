import createSchema from 'part:@sanity/base/schema-creator';
import testimonials from './testimonials';
import works from './works';
import contact from './contact';
import about from './about';
import brands from './brands';
import skills from './skills';
import workExperience from './workExperience';
import experiences from './experiences';


import schemaTypes from 'all:part:@sanity/base/schema-type'


export default createSchema({
  name: 'default',

  types: schemaTypes.concat([
    testimonials, skills, workExperience, brands, about, experiences, contact, works
  ]),
})
