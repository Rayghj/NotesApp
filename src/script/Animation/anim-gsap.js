import { gsap } from 'gsap';

const noteNav = document.querySelectorAll('note-nav');
gsap.from(noteNav, {
    ease: 'power1.out',
    duration: 1,
    opacity: 0,
    y: -50,
});

const formHeader = document.querySelectorAll('.form-header');
gsap.from(formHeader, {
    ease: 'power1.out',
    duration: 1,
    opacity: 0,
    delay: 1.25,
});

const noteForm = document.querySelectorAll('.note-form');
gsap.from(noteForm, {
    ease: 'power1.out',
    duration: 1,
    opacity: 0,
    y: -50,
    delay: 0.8,
});

const listHeader = document.querySelectorAll('.list-header');
gsap.from(listHeader, {
    ease: 'power1.out',
    duration: 1,
    opacity: 0,
    delay: 1.25,
});

const noteUnArchive = document.querySelectorAll('note-data');
gsap.from(noteUnArchive, {
    ease: 'power1.out',
    duration: 1,
    opacity: 0,
    x: -50,
    delay: 0.8,
});

const noteArchive = document.querySelectorAll('note-archive');
gsap.from(noteArchive, {
    ease: 'power1.out',
    duration: 1,
    opacity: 0,
    x: 50,
    delay: 0.8,
});

const noteFoot = document.querySelector('note-foot');
gsap.from(noteFoot, {
    ease: 'power1.out',
    duration: 1,
    opacity: 0,
    y: 50,
});
