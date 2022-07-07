import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonChip, IonButton, IonImg, IonThumbnail, IonItem } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>The Department of Computing</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="container">
          <IonImg class="image" src="https://images.unsplash.com/photo-1542641728-6ca359b085f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"></IonImg>
          <IonLabel>Welcome to Computing at UWI, Mona Campus</IonLabel>
        </div>
        <div>
          <h4>For a list of undergraduate courses within the Department of Computing:</h4>
          <IonButton color="primary" class="course-listing" href="https://www.mona.uwi.edu/compsci/sites/default/files/compsci/uploads/department_of_computing_list_of_undergraduate_courses_2016-2017.pdf">Courses</IonButton>
        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
