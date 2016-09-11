<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request) {
        return $this->render('default/index.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.root_dir').'/..'),
        ]);
    }

    /**
     * @Route("/simple")
     */
    public function showAction() {
        return new Response("Simple response");
    }

    /**
     * @Route(
     *     "/complex/{_locale}/{year}/{title}.{_format}",
     *     defaults={"_format": "html"},
     *     requirements={
     *         "_locale": "en|fr",
     *         "_format": "html|rss",
     *         "year": "\d+"
     *     }
     * )
     */
    public function showComplex($_locale='en', $year='2016', $title='title') {
        return new Response("Complex response");
    }

    /**
    * @Route("/external")
    */
    public function externalAction() {
        return $this->redirect('http://www.google.com');
    }

    /**
    * @Route("/internal")
    */
    public function internalAction() {
        return $this->redirectToRoute('blog_show', array('slug' => 'my-page'));
    }

    /**
    * @Route("/session")
    */
    public function sessionAction(Request $request) {
        $session = $request->getSession();
        $session->set('foo', 'bar');
        $foobar = $session->get('foo');
        return new Response('Session : '.$foobar);
    }



}
