package com.project.irang_map.web;

import com.project.irang_map.dto.SignupRequestDto;
import com.project.irang_map.service.MemberService;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Controller
public class UserController {
    private final MemberService memberService;

    @GetMapping("/login")
    public String login(){
        return "login";
    }

    @GetMapping("/login/error")
    public String loginError(Model model)
    {   
        model.addAttribute("error", true);
        return "login";
    }

    //내껀 회원가입이 모달창이라 새 페이지로 이동이 아님!
    // @GetMapping("/signup") 대신 login.mustache에서 action="/join" 넣음
    // public String signup()
    // {
    //     return "signup";
    // }
    
    //회원 가입 요청 처리
    @PostMapping("/join")
    public String registerUser(SignupRequestDto requestDto) {
        System.out.println("관리자? " + requestDto.isAdmin());
        memberService.registerUser(requestDto);
        return "redirect:/login";
    }
}
