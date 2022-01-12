package com.project.irang_map.config.auth;

import com.project.irang_map.domain.user.Member;
import com.project.irang_map.domain.user.MemberRepository;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final MemberRepository userRepository;

    // email으로 사용자 정보 가져오기
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Member user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Can't find " + email));

        return new UserDetailsImpl(user);
    }
}