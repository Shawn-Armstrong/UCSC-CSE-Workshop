<template>
  <div>
    <v-container style="height: 15vh"></v-container>
    <v-card class="mx-auto my-auto pa-6 myclass" max-width="650" outlined>
      <h1>Why contribute?</h1>
      <br />
      <li>Demonstrate your comptency to employers.</li>
      <li>Add another project to your resume.</li>
      <li>Help your fellow students improve.</li>
      <li>Reinforce what you know.</li>
      <li>Make new connections.</li>
    </v-card>

    <v-container class="mt-n3">
      <v-timeline>
        <v-timeline-item>
          <v-card color="primary">
            <v-card-title class="justify-center text-h6 white--text">
              <b>How can I contribute?</b>
            </v-card-title>
            <v-card-text class="white text--primary"
              ><p class="text-left">
                <br />
                <b>Contributing is easy and anyone can do it!</b> The content
                can be as simple or or challenging as you want.
              </p>
              <ul class="text-left">
                <li>
                  Consider writing a small program to highligh a library or CS
                  concept.
                </li>
                <li>
                  Write a small article explaining how a specific algorithm
                  works.
                </li>
                <li>
                  Make a small video sharing a programming tool or resource.
                </li>
                <li>
                  Share resume building tips, intership experience or
                  programming events.
                </li>
                <li>Anything else you can think of!</li>
              </ul>
              <br />

              <p class="text-left"><b>Other ways to contribute...</b></p>
              <ul class="text-left">
                <li>
                  Submit creative resources such as art, photography or drone
                  footage to be used throughout the project.
                </li>
                <li>
                  Mentor new students and anwser questions on the discord.
                </li>
                <li>Peer-review other people's submissions</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-timeline-item>

        <v-timeline-item>
          <v-card color="primary">
            <v-card-title class="justify-center text-h6 white--text">
              <b>Guidelines for contributing</b>
            </v-card-title>
            <v-card-text class="white text--primary"
              ><br />
              <p class="text-left">
                <b>The following criteria must be satisfied :</b>
              </p>
              <ol type="1" class="text-left">
                <li>
                  Content should be related to any major’s curriculum within the
                  Computer Science and Engineering Department.
                </li>
                <li>
                  Content should be original and owned by the submitter; do not
                  use or reproduce previous coursework as well as copyrighted
                  material to include textbooks, assignments, lecture material
                  and exams.
                </li>
              </ol></v-card-text
            >
          </v-card>
        </v-timeline-item>

        <v-timeline-item>
          <v-card color="primary">
            <v-card-title class="justify-center text-h6 white--text">
              <b>Tips for creating content</b>
            </v-card-title>
            <v-card-text class="white text--primary"
              ><p class="text-left">
                <br />
                UCSC Students have
                <a href="https://www.w3schools.com/html/html_links.asp"
                  >free access to a lot of professional software</a
                >
                to include Adobe Creative Cloud.
              </p></v-card-text
            >
          </v-card>
        </v-timeline-item>

        <v-timeline-item>
          <v-card color="primary">
            <v-card-title class="justify-center text-h6 white--text">
              <b>Submitting content</b>
            </v-card-title>
            <v-card-text class="white text--primary"
              ><br />
              Intructions being drafted...
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>

    <v-card class="mx-auto my-auto mt-n4 pa-6 myclass" max-width="650" outlined>
      <h1>Thank you for contributing!</h1>
      <p class="mt-5">
        Feel free to submit a photo, your full name and a networking hyper-link
        to be published within the developers section.
      </p>
    </v-card>

    <v-container style="height: 15vh"></v-container>
  </div>
</template>

<script>
export default {
  name: 'ContributeView',
};
</script>

<style>
li {
  margin: 10px 0;
}
</style>
