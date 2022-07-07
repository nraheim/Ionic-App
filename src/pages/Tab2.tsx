import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonChip, IonButton, IonItem, IonText, IonList, IonListHeader, IonThumbnail, IonAccordionGroup, IonAccordion } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Undergraduate Computing Programmes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Undergraduate Computing Programmes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonText>
          <h1>Majors</h1>
        </IonText>
        <IonAccordionGroup>
          <IonAccordion value="first">
            <IonItem slot="header" color="light">
              <IonThumbnail slot="start">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
              </IonThumbnail>
              <IonLabel>BSc. General - Computer Science Major</IonLabel>
            </IonItem>
                <div className="ion-padding" slot="content">
                  <p>
                  There are many definitions of Computer Science. However, there is a consensus in Computer Science that the central concept is of an algorithm. An algorithm is a set of step-by-step instructions that can be performed by a computer to solve some problem. Computer Science can then be defined as the science of:
                  <IonList>
                    <IonItem>
                      <IonLabel>the design of algorithms</IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>the study of their properties and</IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>the study of their mechanical and linguistic realisation.</IonLabel>
                    </IonItem>
                  </IonList>
                  </p>
                </div>
          </IonAccordion>
          <IonAccordion value="second">
            <IonItem slot="header" color="light">
              <IonThumbnail slot="start">
                <img src="https://images.unsplash.com/photo-1591453089343-9ee5e4ac7e2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
              </IonThumbnail>
              <IonLabel>BSc. General - Software Engineering Major</IonLabel>
            </IonItem>
                <div className="ion-padding" slot="content">
                <p>
                The major in software engineering is a three year programme based on the ACM/IEEE recommendations. Software engineering is one of the five sub-disciplines of computing. It focuses on developing methods, processes and tools for building large, complex software systems.
                </p>
                </div>
          </IonAccordion>
          <IonAccordion value="third">
            <IonItem slot="header" color="light">
              <IonThumbnail slot="start">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80" />
              </IonThumbnail>
              <IonLabel>BSc. Information Technology</IonLabel>
            </IonItem>
                <div className="ion-padding" slot="content">
                  <p> The BSc in Information Technology is a three year programme based on the ACM/IEEE recommendations. The programme aims to address the needs of the Caribbean region and produce graduates who have been exposed to experiences that will prepare them to address the information processing requirements of organisations.</p>
                </div>
          </IonAccordion>
          <IonAccordion value="fourth">
            <IonItem slot="header" color="light">
              <IonThumbnail slot="start">
                <img src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
              </IonThumbnail>
              <IonLabel>BSc. Software Engineering (Mobile Application Technologies)</IonLabel>
            </IonItem>
                <div className="ion-padding" slot="content">
                  <p>The UWI China Institute of Information Technology (UWICIIT), was formed through an agreement between The University of the West Indies (UWI) and the Suzhou Global Institute of Software Technology (GIST) and was officially opened in September of 2016. Both universities have come together to pave 'a silk road for education', linking China to the Caribbean and the rest of the western world.</p>
                </div>
          </IonAccordion>
          <IonAccordion value="fifth">
            <IonItem slot="header" color="light">
              <IonThumbnail slot="start">
                <img src="https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
              </IonThumbnail>
              <IonLabel>BSc Computer Studies Option</IonLabel>
            </IonItem>
                <div className="ion-padding" slot="content">
                  <p>This degree offers a mixture of courses from Computing and from the Faculty of Social Sciences. NB: Acceptance into the Computer Studies Option does not guarantee acceptance into Part II courses in the Faculty of Social Sciences.</p>
                </div>
          </IonAccordion>
        </IonAccordionGroup>

        <IonText>
          <h1>Minors</h1>
        </IonText>
        <IonAccordionGroup>
          <IonAccordion value="first">
            <IonItem slot="header" color="light">
              <IonThumbnail slot="start">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
              </IonThumbnail>
              <IonLabel>Minor in Computer Science</IonLabel>
            </IonItem>
                <div className="ion-padding" slot="content">
                  <p>
                  There are many definitions of Computer Science. However, there is a consensus in Computer Science that the central concept is of an algorithm. An algorithm is a set of step-by-step instructions that can be performed by a computer to solve some problem. Computer Science can then be defined as the science of:
                  <IonList>
                    <IonItem>
                      <IonLabel>the design of algorithms</IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>the study of their properties and</IonLabel>
                    </IonItem>
                    <IonItem>
                      <IonLabel>the study of their mechanical and linguistic realisation.</IonLabel>
                    </IonItem>
                  </IonList>
                  </p>
                </div>
          </IonAccordion>
          <IonAccordion value="second">
            <IonItem slot="header" color="light">
              <IonThumbnail slot="start">
                <img src="https://images.unsplash.com/photo-1591453089343-9ee5e4ac7e2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
              </IonThumbnail>
              <IonLabel>Minor in Software Engineering</IonLabel>
            </IonItem>
                <div className="ion-padding" slot="content">
                <p>
                The major in software engineering is a three year programme based on the ACM/IEEE recommendations. Software engineering is one of the five sub-disciplines of computing. It focuses on developing methods, processes and tools for building large, complex software systems.
                </p>
                </div>
          </IonAccordion>
          <IonAccordion value="third">
            <IonItem slot="header" color="light">
              <IonThumbnail slot="start">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80" />
              </IonThumbnail>
              <IonLabel>Minor in Information Technology</IonLabel>
            </IonItem>
                <div className="ion-padding" slot="content">
                  <p> The BSc in Information Technology is a three year programme based on the ACM/IEEE recommendations. The programme aims to address the needs of the Caribbean region and produce graduates who have been exposed to experiences that will prepare them to address the information processing requirements of organisations.</p>
                </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
