import { defineQuery } from "next-sanity"

export const STARTUP_QUERY =
    defineQuery(`*[_type == "startup" && defined(slug.current) && !defined($search)|| title match $search || category match $search || author->name match $search ]| order(_createdAt desc){
        _id,
        title,
        _createdAt,
        author->{
            _id,name,image,bio
        },
        views,
        description,
        category,
        image,
    }`);


export const STARTUP_BY_ID_QUERY=
defineQuery(`*[_type == "startup" && _id==$id][0]{
        _id,
        title,
        _createdAt,
        author->{
            _id,name,image,bio,username
        },
        views,
        description,
        category,
        image,
        pitch
    }`)

export const STARTUP_VIEW_QUERY=
    defineQuery(`
        *[_type=="startup" && _id==$id][0]{
        _id,views
        }
        `)