import { Button,  Container, Table } from "react-bootstrap";
import classes from './HomeInformation.module.css'
import { AiOutlinePlayCircle } from "react-icons/ai";


function HomePage() {
  return (
    <>
     <div className={classes.header}>
        <h1 className={classes['header-text']}>The Generic</h1>
      <Button className={classes.button}>Get our Latest Album</Button>
      <div>
          <AiOutlinePlayCircle className={classes.design} />
        </div>
        </div>
      
      <Container className={classes.h1}>
        <h2 >Tours</h2>
      </Container>

      <Container >
        <Table>
            <tbody >
        <tr className={classes.tableRow}>
          <td >JULY 16</td>
          <td style={{color:'#777'}}>DETROIT, MI</td>
          <td style={{color:'#777'}}>DTE ENERGY MUSIC THEATRE</td>
          <td><Button variant="info"
          >
            BUY TICKETS
          </Button>
          </td>
          
        </tr>
        <tr >
          <td >JULY 17</td>
          <td style={{color:'#777'}}>DETROIT, MI</td>
          <td style={{color:'#777'}}>DTE ENERGY MUSIC THEATRE</td>
          <td><Button 
            variant="info"
          >
            BUY TICKETS
          </Button></td>
        </tr>
        
        <tr  >
          <td >MAR 18</td>
          <td style={{color:'#777'}}>DETROIT, MI</td>
          <td style={{color:'#777'}}>DTE ENERGY MUSIC THEATRE</td>
          <td><Button 
            variant="info"
          >
            BUY TICKETS
          </Button></td>
        </tr>
        <tr >
          <td>SEP 19</td>
          <td style={{color:'#777'}}>DETROIT, MI</td>
          <td style={{color:'#777'}}>DTE ENERGY MUSIC THEATRE</td>
          <td><Button 
            variant="info"
          >
            BUY TICKETS
          </Button></td>
        </tr>
        <tr >
          <td >AUG 20</td>
          <td style={{color:'#777'}}>DETROIT, MI</td>
          <td style={{color:'#777'}}>DTE ENERGY MUSIC THEATRE</td>
          <td><Button 
            variant="info"
          >
            BUY TICKETS
          </Button></td>
          </tr>
          <tr >
          <td >AUG 29</td>
          <td style={{color:'#777'}}>DETROIT, MI</td>
          <td style={{color:'#777'}}>DTE ENERGY MUSIC THEATRE</td>
          <td><Button 
            variant="info"
          >
            BUY TICKETS
          </Button></td>
          </tr>
          </tbody>
          </Table>
      </Container>
    </>
  );
}

export default HomePage;