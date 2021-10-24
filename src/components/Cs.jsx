import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Paragraph from './Paragraph';
import Sidebar from "./Sidebar";
import Header from "./Header"



function Cs() {
  return (
    <>
    <div className="wrapper">
<Header />
</div>
      <Row  >
        <Col sm={3}><Sidebar /></Col>


        <Col sm={8}>
          <br />
          <h2> Intro to Computer Science</h2>
          <p>Content sourced from <a href="https://learn.saylor.org/course/view.php?id=65&gclid=Cj0KCQjwiNSLBhCPARIsAKNS4_ccD1lGSQ1nb_2LAO_zX7cPi5r-Y4awRryNoB0YzftU_wgbp6DTYxEaAoDWEALw_wcB">CS107: C++ Programming</a>.</p>
          <br />
          <h5>In this course, we will learn the mechanics of editing and compiling programs in C++.
          We will begin with a discussion of the essential elements of C++ programming: variables,
          loops, expressions, functions, and string class. Then, we will cover the basics of
          object-oriented programming: classes, inheritance, templates, exceptions, and file
          manipulation. We will then review function and class templates and the classes that perform
          output and input of characters to/from files. This course will also cover namespaces,
          exception handling, and preprocessor directives. In the last part of the course, we will
          learn some slightly more sophisticated programming techniques that deal with data structures
      such as linked lists and binary trees.</h5>
          <br />
          <iframe width="100%"
            height="400px"
            src="https://widgets.judge0.com?widgetId=kxw3&theme=dark&language=optional">
          </iframe>
          <br/><br/>
          <h3>What is C++?</h3>
          <h5>This unit focuses on implementing simple control structures. First, we will learn how
          to use conditional and iteration structures to make decisions and to repeat code. We will
          then discuss how to use debugging tools to test and troubleshoot these structures. We will
          also explore how to break our code into smaller, more manageable pieces by putting
          certain common pieces into functions. We will also discus scope, as well as passing
          variables by value and by reference. Finally, we explore a special type of class, the
          string, which has some special functions that allow us to manipulate text. By introducing
          classes and how they are used here, we will be ready to tackle object-oriented programming
         in the next unit.</h5>
          <br />
          <Paragraph/>
          <br/>
          <h3>Working with simple Data Structures</h3>
          <h5>Data structures are just ways to store multiple data values. Arrays, structs,
          enumerations, unions, queues, lists, and vectors are a few examples of data structures.
          In this unit, we will focus on a few simple structures. The array is one of the most basic
          structures used in computer programming. Arrays store data contiguously by representing
          data with a common name and distinguishing it by its index. This is like a parking garage:
          the garage stores vehicles; all of the parking spaces have a common name (the name of the
          garage); and each parked vehicle is identified by a specific parking space number. This is
          also true of arrays. Think of arrays as parking garages for our data. After exploring
          arrays, we then learn structs, unions, and enumerations, which are special ways to group
           more complex data types.</h5>
          <br/>
          <h3>Hello World!</h3>
          <h5>The first program that most aspiring programmers write is the classic "Hello World"
          program. The purpose of this program is to display the text "Hello World!" to the
          user. The "Hello World" example is somewhat famous as it is often the first program
               presented when introducing a programming language.</h5>
      
        </Col>
      </Row>

    </>

  );
}

export default Cs;
